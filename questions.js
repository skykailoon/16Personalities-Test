export const AXES = ['ei','ns','tf','jp','stress'];
export const PAGE_SIZE = 6;
export const choices = ['非常赞成','赞成','稍微赞成','中立','稍微不赞成','不赞成','非常不赞成'];
export const values = [3,2,1,0,-1,-2,-3];
export const questions = [
  {
    "text": "你经常结交新朋友。",
    "original": "You regularly make new friends.",
    "weights": {
      "ei": 1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "社交主动性",
    "id": 1,
    "source": "截图 1 · 第 1 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "你喜欢探索不熟悉的想法和观点。",
    "original": "You enjoy exploring unfamiliar ideas and viewpoints.",
    "weights": {
      "ei": 0,
      "ns": 1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "新观点",
    "id": 2,
    "source": "截图 1 · 第 2 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "你不容易被情绪化的论点说服。",
    "original": "You are not easily swayed by emotional arguments.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 1 · 第 3 题",
    "facet": "说服依据",
    "id": 3,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你常常难以赶上截止日期。",
    "original": "You struggle with deadlines.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": -1,
      "stress": 0
    },
    "source": "截图 1 · 第 4 题",
    "facet": "截止日期",
    "id": 4,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "你很少感到不安或缺乏安全感。",
    "original": "You rarely feel insecure.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 1
    },
    "source": "截图 1 · 第 5 题",
    "facet": "安全感",
    "id": 5,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "你会避免打电话。",
    "original": "You avoid making phone calls.",
    "weights": {
      "ei": -1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "沟通方式",
    "id": 6,
    "source": "截图 1 · 第 6 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。 避免电话也可能来自工作习惯或沟通条件，不能独立判断内外向。",
    "secondaryRationale": null
  },
  {
    "text": "你喜欢讨论道德两难的问题。",
    "original": "You enjoy debating ethical dilemmas.",
    "weights": {
      "ei": 0,
      "ns": 1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "抽象讨论",
    "id": 7,
    "source": "截图 2 · 第 1 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。 喜欢道德两难讨论不说明会选择逻辑还是价值，不额外计 T/F。",
    "secondaryRationale": null
  },
  {
    "text": "比起完全直言不讳，你更优先照顾他人的感受。",
    "original": "You prioritize being sensitive over being completely honest.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": -1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 2 · 第 2 题",
    "facet": "沟通取舍",
    "id": 8,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你的生活和工作空间干净、有条理。",
    "original": "Your living and working spaces are clean and organized.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 1,
      "stress": 0
    },
    "source": "截图 2 · 第 3 题",
    "facet": "环境组织",
    "id": 9,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "你经常感到不堪重负。",
    "original": "You often feel overwhelmed.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -1
    },
    "source": "截图 2 · 第 4 题",
    "facet": "压力感受",
    "id": 10,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "你喜欢参加团队活动。",
    "original": "You enjoy participating in team-based activities.",
    "weights": {
      "ei": 1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "群体活动偏好",
    "id": 11,
    "source": "截图 2 · 第 5 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "你喜欢尝试新的、尚未经验证的方法。",
    "original": "You enjoy experimenting with new and untested approaches.",
    "weights": {
      "ei": 0,
      "ns": 1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "新方法",
    "id": 12,
    "source": "截图 2 · 第 6 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "决定行动方案时，你更优先考虑事实，而不是他人的感受。",
    "original": "You prioritize facts over people’s feelings when determining a course of action.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 3 · 第 1 题",
    "facet": "决策依据",
    "id": 13,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你经常不做任何安排，让一天自然展开。",
    "original": "You often allow the day to unfold without any schedule at all.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": -1,
      "stress": 0
    },
    "source": "截图 3 · 第 2 题",
    "facet": "日程安排",
    "id": 14,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "你很少担心自己是否给刚认识的人留下了好印象。",
    "original": "You rarely worry about whether you make a good impression on people you meet.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 1
    },
    "source": "截图 3 · 第 3 题",
    "facet": "评价担忧",
    "id": 15,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "走向一个让你感兴趣的人，并主动与对方交谈，会让你觉得自在。",
    "original": "You feel comfortable just walking up to someone you find interesting and striking up a conversation.",
    "weights": {
      "ei": 1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "社交主动性",
    "id": 16,
    "source": "截图 3 · 第 4 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "你对讨论创作作品的多种解读不太感兴趣。",
    "original": "You are not too interested in discussions about various interpretations of creative works.",
    "weights": {
      "ei": 0,
      "ns": -1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "多义解读",
    "id": 17,
    "source": "截图 3 · 第 5 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "比起数字或数据，人们的故事和情感更能打动你。",
    "original": "People’s stories and emotions speak louder to you than numbers or data.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": -1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 3 · 第 6 题",
    "facet": "说服依据",
    "id": 18,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你会主动寻找新的体验和知识领域去探索。",
    "original": "You actively seek out new experiences and knowledge areas to explore.",
    "weights": {
      "ei": 0,
      "ns": 1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "探索偏好",
    "id": 19,
    "source": "截图 4 · 第 1 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "你容易担心事情会往坏的方向发展。",
    "original": "You are prone to worrying that things will take a turn for the worse.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -1
    },
    "source": "截图 4 · 第 2 题",
    "facet": "预期担忧",
    "id": 20,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "比起集体活动，你更喜欢独自进行的爱好或活动。",
    "original": "You enjoy solitary hobbies or activities more than group ones.",
    "weights": {
      "ei": -1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "独处偏好",
    "id": 21,
    "source": "截图 4 · 第 3 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "你无法想象自己以创作虚构故事为职业。",
    "original": "You cannot imagine yourself writing fictional stories for a living.",
    "weights": {
      "ei": 0,
      "ns": -1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "想象创作",
    "id": 22,
    "source": "截图 4 · 第 4 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。 写作职业偏好受技能、机会与兴趣影响，不能独立判断 N/S。",
    "secondaryRationale": null
  },
  {
    "text": "做决定时，你更看重效率，即使这意味着忽略某些情感因素。",
    "original": "You favor efficiency in decisions, even if it means disregarding some emotional aspects.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 4 · 第 5 题",
    "facet": "效率与感受",
    "id": 23,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你更喜欢先完成杂务，再让自己放松。",
    "original": "You prefer to do your chores before allowing yourself to relax.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 1,
      "stress": 0
    },
    "source": "截图 4 · 第 6 题",
    "facet": "先完成后放松",
    "id": 24,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "发生分歧时，比起顾及他人的感受，你更优先证明自己的观点。",
    "original": "In disagreements, you prioritize proving your point over preserving the feelings of others.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 5 · 第 1 题",
    "facet": "分歧处理",
    "id": 25,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "在社交聚会中，你通常会等别人先做自我介绍。",
    "original": "You usually wait for others to introduce themselves first at social gatherings.",
    "weights": {
      "ei": -1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "社交主动性",
    "id": 26,
    "source": "截图 5 · 第 2 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "你的情绪可能变化得很快。",
    "original": "Your mood can change very quickly.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -1
    },
    "source": "截图 5 · 第 3 题",
    "facet": "情绪变化",
    "id": 27,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "比起基于事实的论证，能引起情感共鸣的内容通常更能说服你。",
    "original": "You are usually more persuaded by what resonates emotionally with you than by factual arguments.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": -1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 5 · 第 4 题",
    "facet": "说服依据",
    "id": 28,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你经常到最后一刻才把事情做完。",
    "original": "You often end up doing things at the last possible moment.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": -1,
      "stress": 0
    },
    "source": "截图 5 · 第 5 题",
    "facet": "临近期限行动",
    "id": 29,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "你能有效安排任务的优先次序和计划，经常在截止日期很久以前就完成。",
    "original": "You prioritize and plan tasks effectively, often completing them well before the deadline.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 1,
      "stress": 0
    },
    "source": "截图 5 · 第 6 题",
    "facet": "计划与提前完成",
    "id": 30,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "比起独自一人，你通常更喜欢和其他人待在一起。",
    "original": "You usually prefer to be around others rather than on your own.",
    "weights": {
      "ei": 1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "群体活动偏好",
    "id": 31,
    "source": "截图 6 · 第 1 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "当讨论变得非常理论化时，你会觉得无聊或失去兴趣。",
    "original": "You become bored or lose interest when the discussion gets highly theoretical.",
    "weights": {
      "ei": 0,
      "ns": -1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "理论兴趣",
    "id": 32,
    "source": "截图 6 · 第 2 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "当事实与感受冲突时，你通常会跟随内心的感受。",
    "original": "When facts and feelings conflict, you usually find yourself following your heart.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": -1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 6 · 第 3 题",
    "facet": "决策取舍",
    "id": 33,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你觉得维持规律的工作或学习日程很有挑战。",
    "original": "You find it challenging to maintain a consistent work or study schedule.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": -1,
      "stress": 0
    },
    "source": "截图 6 · 第 4 题",
    "facet": "规律日程",
    "id": 34,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "你很少反复怀疑自己已经作出的选择。",
    "original": "You rarely second-guess the choices that you have made.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 1
    },
    "source": "截图 6 · 第 5 题",
    "facet": "选择后的自信",
    "id": 35,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "你的朋友会用活泼、外向来形容你。",
    "original": "Your friends would describe you as lively and outgoing.",
    "weights": {
      "ei": 1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "日常社交表现",
    "id": 36,
    "source": "截图 6 · 第 6 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "你会被写作等各种形式的创意表达所吸引。",
    "original": "You are drawn to various forms of creative expression, such as writing.",
    "weights": {
      "ei": 0,
      "ns": 1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "创意表达",
    "id": 37,
    "source": "截图 7 · 第 1 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "做选择时，你通常依据客观事实，而不是情感上的印象。",
    "original": "You usually base your choices on objective facts rather than emotional impressions.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 7 · 第 2 题",
    "facet": "决策依据",
    "id": 38,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你喜欢每天都有一份待办事项清单。",
    "original": "You like to have a to-do list for each day.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 1,
      "stress": 0
    },
    "source": "截图 7 · 第 3 题",
    "facet": "任务清单",
    "id": 39,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "即使压力很大，你通常仍能保持平静。",
    "original": "You usually stay calm, even under a lot of pressure.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 1
    },
    "source": "截图 7 · 第 4 题",
    "facet": "压力下的平静",
    "id": 40,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "一想到拓展人脉，或向陌生人介绍、推介自己，你就觉得很有压力。",
    "original": "You find the idea of networking or promoting yourself to strangers very daunting.",
    "weights": {
      "ei": -1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -0.5
    },
    "facet": "社交主动性",
    "id": 41,
    "source": "截图 7 · 第 5 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": "对陌生人交流的回避倾向计 I；题目同时明确表达畏惧和压力，补充计压力敏感 0.5 权重。社交经验也可能影响回答。"
  },
  {
    "text": "比起简单直接的想法，复杂而新颖的想法更让你兴奋。",
    "original": "Complex and novel ideas excite you more than simple and straightforward ones.",
    "weights": {
      "ei": 0,
      "ns": 1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "抽象与新颖",
    "id": 42,
    "source": "截图 7 · 第 6 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "你很容易与刚认识的人建立联系。",
    "original": "You can easily connect with people you have just met.",
    "weights": {
      "ei": 1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "社交主动性",
    "id": 43,
    "source": "截图 8 · 第 1 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "如果计划被打乱，你最优先考虑的是尽快回到原来的轨道。",
    "original": "If your plans are interrupted, your top priority is to get back on track as soon as possible.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 1,
      "stress": 0
    },
    "source": "截图 8 · 第 2 题",
    "facet": "恢复计划",
    "id": 44,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "很久以前犯过的错误，至今仍会困扰你。",
    "original": "You are still bothered by mistakes that you made a long time ago.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -1
    },
    "source": "截图 8 · 第 3 题",
    "facet": "对过去的反复思考",
    "id": 45,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "你对讨论世界未来可能是什么样的理论不感兴趣。",
    "original": "You are not interested in discussing theories on what the world could look like in the future.",
    "weights": {
      "ei": 0,
      "ns": -1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "未来可能性",
    "id": 46,
    "source": "截图 8 · 第 4 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "与其说你在控制情绪，不如说情绪更常控制你。",
    "original": "Your emotions control you more than you control them.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -1
    },
    "source": "截图 8 · 第 5 题",
    "facet": "情绪调节",
    "id": 47,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "做决定时，你更关注受影响的人会有什么感受，而不是什么最合乎逻辑或最有效率。",
    "original": "When making decisions, you focus more on how the affected people might feel than on what is most logical or efficient.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": -1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 8 · 第 6 题",
    "facet": "对人的影响",
    "id": 48,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你的工作方式更接近自发的精力爆发，而不是有组织、持续稳定地投入。",
    "original": "Your personal work style is closer to spontaneous bursts of energy than organized and consistent efforts.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": -1,
      "stress": 0
    },
    "source": "截图 9 · 第 1 题",
    "facet": "自发与规律",
    "id": 49,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "当有人很欣赏你时，你会想：他们还要多久才会对你失望。",
    "original": "When someone thinks highly of you, you wonder how long it will take them to feel disappointed in you.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -1
    },
    "source": "截图 9 · 第 2 题",
    "facet": "自我怀疑",
    "id": 50,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "你会喜欢一份大部分时间都需要独自工作的职业。",
    "original": "You would love a job that requires you to work alone most of the time.",
    "weights": {
      "ei": -1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "独处偏好",
    "id": 51,
    "source": "截图 9 · 第 3 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "你认为思考抽象的哲学问题是在浪费时间。",
    "original": "You believe that pondering abstract philosophical questions is a waste of time.",
    "weights": {
      "ei": 0,
      "ns": -1,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "抽象思考",
    "id": 52,
    "source": "截图 9 · 第 4 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": null
  },
  {
    "text": "比起安静、亲密的小空间，忙碌、热闹的氛围更吸引你。",
    "original": "You feel more drawn to busy, bustling atmospheres than to quiet, intimate places.",
    "weights": {
      "ei": 1,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 0
    },
    "facet": "环境偏好",
    "id": 53,
    "source": "截图 9 · 第 5 题",
    "primaryAxis": "ei",
    "rationale": "主要涉及与人互动或独处的偏好，不据此推断信息或决策方式。",
    "secondaryRationale": null
  },
  {
    "text": "如果你感觉某个决定是对的，你通常就会付诸行动，而不需要更多证据。",
    "original": "If a decision feels right to you, you often act on it without needing further proof.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": -1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 9 · 第 6 题",
    "facet": "决策依据",
    "id": 54,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。 “感觉是对的”含义较宽，此题沿用感受优先的解释，不重复计入 N/S。",
    "secondaryRationale": null
  },
  {
    "text": "即使是一个小错误，也可能让你怀疑自己整体的能力和知识。",
    "original": "Even a small mistake can cause you to doubt your overall abilities and knowledge.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": -1
    },
    "source": "截图 10 · 第 1 题",
    "facet": "错误后的自信",
    "id": 55,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  },
  {
    "text": "你会有条不紊地完成事情，不跳过任何步骤。",
    "original": "You complete things methodically without skipping over any steps.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 1,
      "stress": 0
    },
    "source": "截图 10 · 第 2 题",
    "facet": "按步骤完成",
    "id": 56,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "你更喜欢需要想出创意解决方案的任务，而不是按照具体步骤执行的任务。",
    "original": "You prefer tasks that require you to come up with creative solutions rather than follow concrete steps.",
    "weights": {
      "ei": 0,
      "ns": 1,
      "tf": 0,
      "jp": -0.5,
      "stress": 0
    },
    "facet": "解决问题方式",
    "id": 57,
    "source": "截图 10 · 第 3 题",
    "primaryAxis": "ns",
    "rationale": "主要涉及具体信息与抽象、新颖、可能性的偏好；讨论的内容不等于社交倾向。",
    "secondaryRationale": "创意方案与具体步骤的比较主要计 N；不偏好预定步骤也可能反映开放式处理方式，暂以 0.5 权重计 P。这是可讨论的内容解释，并非已验证的跨维度载荷。"
  },
  {
    "text": "做选择时，比起逻辑推理，你更可能依靠情感上的直觉。",
    "original": "You are more likely to rely on emotional intuition than logical reasoning when making a choice.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": -1,
      "jp": 0,
      "stress": 0
    },
    "source": "截图 10 · 第 4 题",
    "facet": "决策依据",
    "id": 58,
    "primaryAxis": "tf",
    "rationale": "主要涉及做判断时更看重逻辑依据还是感受与价值；“事实”不自动等于 S，“直觉”不自动等于 N。",
    "secondaryRationale": null
  },
  {
    "text": "你喜欢使用日程表、清单等组织工具。",
    "original": "You like to use organizing tools like schedules and lists.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 1,
      "stress": 0
    },
    "source": "截图 10 · 第 5 题",
    "facet": "组织工具",
    "id": 59,
    "primaryAxis": "jp",
    "rationale": "主要涉及计划、组织、收尾与灵活自发的生活方式，不把整洁或拖延直接当作其他人格字母。",
    "secondaryRationale": null
  },
  {
    "text": "你相信事情最终会顺利发展。",
    "original": "You feel confident that things will work out for you.",
    "weights": {
      "ei": 0,
      "ns": 0,
      "tf": 0,
      "jp": 0,
      "stress": 1
    },
    "source": "截图 10 · 第 6 题",
    "facet": "积极预期",
    "id": 60,
    "primaryAxis": "stress",
    "rationale": "涉及自信、担忧、情绪或压力感受，作为补充自评，不进入四字母人格。",
    "secondaryRationale": null
  }
];
export const PAGE_COUNT = Math.ceil(questions.length / PAGE_SIZE);
export function pageQuestions(page){
 if(!Number.isInteger(page)||page<0||page>=PAGE_COUNT)throw new Error('无效页码');
 return questions.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE);
}
export function firstMissing(answers,page=null){
 const start=page===null?0:page*PAGE_SIZE,end=page===null?questions.length:Math.min(start+PAGE_SIZE,questions.length);
 for(let i=start;i<end;i++)if(!values.includes(answers[i]))return i;
 return -1;
}
export function score(answers,items=questions){
 if(!Array.isArray(answers)||answers.length!==items.length||Array.from(answers).some(a=>!Number.isInteger(a)||!values.includes(a)))throw new Error('请完成所有题目后再查看结果。');
 const axes={};
 for(const axis of AXES){
  const points=items.map((q,i)=>{const w=q.weights[axis]||0;return w===0?null:3*Math.abs(w)+w*answers[i];});
  const maximum=items.reduce((n,q)=>n+6*Math.abs(q.weights[axis]||0),0);
  if(!maximum)throw new Error('该维度没有可计分题目');
  const total=points.reduce((n,v)=>n+(v??0),0),positive=Math.round(total/maximum*1000)/10;
  axes[axis]={positive,negative:Math.round((100-positive)*10)/10,total,maximum,points,count:points.filter(v=>v!==null).length};
 }
 return {e:axes.ei.positive,i:axes.ei.negative,n:axes.ns.positive,s:axes.ns.negative,t:axes.tf.positive,f:axes.tf.negative,j:axes.jp.positive,p:axes.jp.negative,axes};
}
