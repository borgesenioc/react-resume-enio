import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col mb-7">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-wrap gap-3 mt-5">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  return (
    <div className="inline-block overflow-hidden rounded-full bg-orange-500">
      <span className="px-4 py-5 text-lg font-bold text-white">
        {skill.name}
      </span>
    </div>
  );
});

Skill.displayName = 'Skill';
