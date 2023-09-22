import { AvatarRating, Header, Loading, Button, SkillList } from "@/components";
import { GET_MENTOR_BY_ID } from "@/services";
import { getAvatarImageUrl, getSize } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { Container, Description, RatingContainer } from "./styles";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  Collection,
  UserContext,
  getItem,
  setItem,
  type SharedCollection,
} from "@/storages";
import { Platform } from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

type Mentor = {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    skills: Array<{ id: string; name: string; imageUrl: string }>;
  };
  experience: string;
  rating: number;
  evaluations: Array<{ rating: number }>;
};

const meetLinks = [
  "https://meet.google.com/kbe-kmvz-jpd",
  "https://meet.google.com/kva-towb-chy",
  "https://meet.google.com/tbt-nxgx-rfh",
  "https://meet.google.com/hzn-ncew-zpn",
  "https://meet.google.com/snw-ymrf-nfx",
  "https://meet.google.com/nyg-yara-jtb",
  "https://meet.google.com/wnp-bpjb-khx",
  "https://meet.google.com/cjd-fqan-tuh",
  "https://meet.google.com/idv-nmkz-zka",
];

export default function MentorDetail() {
  const { id } = useLocalSearchParams();
  const route = useRouter();

  const { user } = useContext(UserContext);
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [meetTime, setMeetTime] = useState<string | null>(null);
  const [meetDate, setMeetDate] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [storeMeeting, setStoreMeeting] = useState<boolean>(false);

  const [gqlGetMentorById, gqlGetMentorByIdProps] = useLazyQuery(
    GET_MENTOR_BY_ID,
    {
      errorPolicy: "all",
    },
  );

  useEffect(() => {
    getMentorInfo();
  }, []);

  useEffect(() => {
    if (storeMeeting) {
      handleMeetingSubmit();
    }
  }, [storeMeeting]);

  async function getMentorInfo() {
    if (!user) {
      route.replace("/(public)/onboarding");
      return;
    }

    const { data, error } = await gqlGetMentorById({
      variables: { id },
      context: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    });

    if (!gqlGetMentorByIdProps.loading && error !== undefined) {
      route.back();
      return;
    }

    const skills = data.mentor.user.skills.map((item: any) => ({
      ...item,
    }));

    const getRating = () => {
      if (data.mentor.evaluations.length === 0) return 0;

      const sumOfAlEvaluations = data.mentor.evaluations.reduce(
        (acc: any, curr: any) => acc + curr.rating,
        0,
      );

      const average = sumOfAlEvaluations / data.mentor.evaluations.length;

      return average;
    };

    const mentor = {
      id: data.mentor.id,
      user: {
        id: data.mentor.user.id,
        name: data.mentor.user.name,
        email: data.mentor.user.email,
        skills,
      },
      experience: data.mentor.experience,
      evaluations: data.mentor.evaluations,
      rating: getRating(),
      availabilities: data.mentor.availabilities,
    };

    setMentor(mentor);
  }

  async function handleMeetingSubmit() {
    if (!user) return;

    setLoading(true);

    const meeting = {
      date: meetDate,
      hour: meetTime,
      link: meetLinks[Math.floor(Math.random() * 8)],
      mentor: {
        name: mentor?.user.name,
        rating: mentor?.rating,
      },
    };

    const shared = await getItem<SharedCollection>(Collection.SHARED);

    const { meetings } = shared?.[user.id] ?? { meetings: [] };

    const newData = {
      ...shared?.[user.id],
      [user.id]: { meetings: [...meetings, meeting] },
    };

    await setItem(Collection.SHARED, newData);

    setStoreMeeting(false);
    setLoading(false);

    setTimeout(() => {
      route.replace("/(private)/home");
    }, 300);
  }

  function handleConfirm(type: "date" | "datetime" | "time", date: Date) {
    const dateToString = format(date, "dd/MM");
    const timeToString = format(date, "kk:mm");

    if (type.includes("date")) {
      setMeetDate(dateToString);
    }

    if (type.includes("time")) {
      setMeetTime(timeToString);
      setShowDatePicker(false);
    }

    if (type === "datetime") {
      setShowDatePicker(false);
    }
  }

  function handleCancel() {
    setShowDatePicker(false);
  }

  return (
    <>
      <Loading active={gqlGetMentorByIdProps.loading || loading} />
      <Header />
      <Container>
        {mentor && (
          <>
            <RatingContainer ml={getSize(30)} mt={getSize(20)}>
              <AvatarRating
                userType="MENTOR"
                name={mentor.user.name}
                rating={0}
                photoUrl={getAvatarImageUrl(mentor.user.name)}
              />
            </RatingContainer>
            <Description ml={getSize(30)} mt={getSize(30)} mr={getSize(30)}>
              {mentor?.experience ?? "Descrição não disponível"}
            </Description>
            <SkillList
              title="Habilidades"
              data={mentor.user.skills}
              mt={getSize(40)}
            />

            <DateTimePickerModal
              mode="datetime"
              locale="pt_BR"
              isVisible={showDatePicker && Platform.OS === "ios"}
              onCancel={handleCancel}
              onConfirm={(date) => {
                handleConfirm("datetime", date);
                setStoreMeeting(true);
              }}
            />

            <DateTimePickerModal
              mode="date"
              locale="pt_BR"
              isVisible={
                showDatePicker && Platform.OS === "android" && meetDate === null
              }
              onCancel={handleCancel}
              onConfirm={(date) => {
                handleConfirm("date", date);
              }}
            />

            <DateTimePickerModal
              mode="time"
              locale="pt_BR"
              isVisible={
                showDatePicker &&
                Platform.OS === "android" &&
                meetDate !== null &&
                meetTime === null
              }
              onCancel={handleCancel}
              onConfirm={(date) => {
                handleConfirm("time", date);
                setStoreMeeting(true);
              }}
            />

            <Button
              mt={20}
              mb={20}
              value="Agendar mentoria"
              onPress={async () => {
                setShowDatePicker(true);
              }}
            />
          </>
        )}
      </Container>
    </>
  );
}
