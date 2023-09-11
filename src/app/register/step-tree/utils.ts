export const mergeAndSortSkills = (
  ...args: Array<Array<{ name: string; id: string; type: string }>>
) => {
  const allSkillsUnsorted = args.reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);

  const sortedSkillsByName = allSkillsUnsorted.sort((first, second) => {
    const firstName = first.name.toUpperCase();
    const secondName = second.name.toUpperCase();
    if (firstName < secondName) {
      return -1;
    }
    if (firstName > secondName) {
      return 1;
    }

    return 0;
  });

  return sortedSkillsByName;
};

export function addSkillTypeOnListOfSkills(
  list: Array<{ id: string; name: string }>,
  type: string,
) {
  return list.map((value: { name: string; id: string }) => ({
    ...value,
    type,
  }));
}
