// 초등학생이 자주 틀리는 맞춤법 대용량 100문항 정밀 검증 데이터베이스
const questionBank = [
  // 1 ~ 10: 필수 기초 맞춤법
  {
    id: 1,
    question: "선생님, 내일 교무실에서 다시 ( )!",
    options: ["봬요", "뵈요"],
    correct: 0,
    principle: "'봬요'는 '뵈어'의 줄임말이므로 '봬요'가 올바른 맞춤법입니다.",
    tip: "💡 세종대왕 꿀팁: '해'를 넣어 자연스러우면 '봬요'! ('해요' -> '봬요', '하요' -> X)"
  },
  {
    id: 2,
    question: "감기 기운이 싹 가시고 빨리 ( ) 좋겠다.",
    options: ["낫았으면", "낳았으면", "낮았으면"],
    correct: 0,
    principle: "병이나 상처가 고쳐지는 것은 '낫다(낫았으면)'입니다.",
    tip: "💡 세종대왕 꿀팁: 병이 회복되는 건 '낫다', 아기를 출산하는 건 '낳다', 높이가 낮은 건 '낮다'!"
  },
  {
    id: 3,
    question: "나 지금 준비물을 안 가져왔는데 ( )?",
    options: ["어떡해", "어떻게"],
    correct: 0,
    principle: "'어떡해'는 '어떻게 해'가 줄어든 말로 문장 끝에 사용합니다.",
    tip: "💡 세종대왕 꿀팁: 문장 끝에는 '어떡해!', 뒤에 행동이 올 때는 '어떻게 가요?'"
  },
  {
    id: 4,
    question: "약속 시간까지 늦지 않게 ( ) 오세요.",
    options: ["반드시", "반듯이"],
    correct: 0,
    principle: "'꼭/틀림없이'라는 뜻을 나타낼 때는 '반드시'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: '꼭'의 뜻은 '반드시', '줄이나 몸을 똑바르게'는 '반듯이'!"
  },
  {
    id: 5,
    question: "즐거운 방학이 ( ) 지나가 버렸다.",
    options: ["금세", "금새"],
    correct: 0,
    principle: "'금세'는 '금시(今時)에'가 줄어든 말로 '금세'가 바른 표기입니다.",
    tip: "💡 세종대왕 꿀팁: '금세'는 시간이 금방 갈 때! ('금새'는 물건의 가격을 뜻해요)"
  },
  {
    id: 6,
    question: "이번 시험 문제는 난이도가 ( ) 쉬운 편이었다.",
    options: ["무난하게", "문안하게"],
    correct: 0,
    principle: "'별다른 어려움이 없다'는 뜻은 '무난(無難)하다'입니다.",
    tip: "💡 세종대왕 꿀팁: '무난하다' = 어려움이 없다! ('문안'은 어른께 드리는 안부 인사)"
  },
  {
    id: 7,
    question: "그동안 해왔던 안 좋은 습관에서 완전히 ( ).",
    options: ["손을 씻었다", "손을 닦았다"],
    correct: 0,
    principle: "나쁜 행동이나 부정적인 일을 끊는 것은 '손을 씻다'라는 관용 표기입니다.",
    tip: "💡 세종대왕 꿀팁: 부정적인 일이나 나쁜 관계를 정리할 땐 '손을 씻다'!"
  },
  {
    id: 8,
    question: "모임 날짜를 ( )로 정하면 좋을까요?",
    options: ["며칠", "몇일"],
    correct: 0,
    principle: "한글 맞춤법에서 '몇 일'이라는 표기는 존재하지 않으며, 항상 '며칠'로 적어야 합니다.",
    tip: "💡 세종대왕 꿀팁: '몇일'이라는 단어는 세상에 없어요! 언제나 '며칠'이 정답!"
  },
  {
    id: 9,
    question: "아무리 바빠도 식사를 거르면 ( ).",
    options: ["안 돼", "안 되", "않 돼"],
    correct: 0,
    principle: "'돼'는 '되어'의 줄임말입니다. 문장 끝에는 '안 돼'로 표기합니다.",
    tip: "💡 세종대왕 꿀팁: '해'를 넣어 '안 해'가 자연스러우면 '안 돼'가 맞습니다!"
  },
  {
    id: 10,
    question: "소풍 갈 생각을 하니 마음이 두근두근 ( ).",
    options: ["설렌다", "설레인다"],
    correct: 0,
    principle: "기본형이 '설레다'이므로 '설렌다/설렘'이 바른 표기입니다.",
    tip: "💡 세종대왕 꿀팁: '설레임'은 아이스크림 이름! 올바른 표준어는 '설렘/설렌다'!"
  },
  {
    id: 11,
    question: "문제를 풀 때 ( ) 힌트를 보지 않고 혼자 해결했다.",
    options: ["굳이", "구지"],
    correct: 0,
    principle: "발음은 [구지]로 나지만, 원형을 밝혀 '굳이'로 적어야 합니다.",
    tip: "💡 세종대왕 꿀팁: 소리는 [구지]로 나지만 글씨는 '굳이'라고 적어요 (구개음화)."
  },
  {
    id: 12,
    question: "인터넷 게시글 아래에 응원의 ( )를 남겼다.",
    options: ["댓글", "대글"],
    correct: 0,
    principle: "답글을 의미하는 올바른 표준어 표기는 '댓글'입니다.",
    tip: "💡 세종대왕 꿀팁: 사이시옷이 붙어 소리 나는 '댓글'이 올바른 단어입니다."
  },
  {
    id: 13,
    question: "그 친구의 이상한 행동은 참 ( ) 일이었다.",
    options: ["희한한", "희안한"],
    correct: 0,
    principle: "드물고 기이하다는 뜻은 '희한(稀罕)하다'가 바른 표기입니다.",
    tip: "💡 세종대왕 꿀팁: '희안하다'는 틀린 표기! '희한하다'가 올바른 단어입니다."
  },
  {
    id: 14,
    question: "숙제를 다 하지 ( ) 게임을 하면 안 된다.",
    options: ["않고", "안고"],
    correct: 0,
    principle: "'아니하고'의 줄임말은 '않고'입니다.",
    tip: "💡 세종대왕 꿀팁: '아니하고'의 뜻은 '않고'! ('안고'는 품에 안는 것을 뜻해요)"
  },
  {
    id: 15,
    question: "내가 뛰어가지 않고 친구와 서로 세게 ( ).",
    options: ["부딪쳤다", "부딪혔다"],
    correct: 0,
    principle: "주체적으로 세게 부딪히는 행동을 강조할 때는 '부딪치다'를 사용합니다.",
    tip: "💡 세종대왕 꿀팁: 내가 가서 세게 쾅 부딪친 건 '부딪치다', 부딪힘을 당한 건 '부딪히다'!"
  },
  {
    id: 16,
    question: "더운 여름날 시원한 바람을 ( ) 휴식을 취했다.",
    options: ["쐬며", "쇠며"],
    correct: 0,
    principle: "바람이나 햇볕을 받는 것은 '쐬다'가 바른 표현입니다.",
    tip: "💡 세종대왕 꿀팁: 바람이나 햇빛은 '쐬다'! (명절을 지낼 때는 '설을 쇠다')"
  },
  {
    id: 17,
    question: "오늘 풀어본 문제의 정답을 하나씩 ( ).",
    options: ["맞혀보자", "맞춰보자"],
    correct: 0,
    principle: "퀴즈나 시험의 정답을 맞게 하는 것은 '맞히다'가 올바른 표현입니다.",
    tip: "💡 세종대왕 꿀팁: 정답을 맞게 하는 건 '맞히다'! (두 개를 비교하거나 줄을 세우는 건 '맞추다')"
  },
  {
    id: 18,
    question: "선생님께서 시험지를 ( ) 주셨다.",
    options: ["채점해", "체점해"],
    correct: 0,
    principle: "점수를 매기는 것은 '채점(採點)'이 올바른 단어입니다.",
    tip: "💡 세종대왕 꿀팁: '체점'이 아니라 '채점'이 맞는 표기입니다."
  },
  {
    id: 19,
    question: "생각을 ( ) 정리한 후에 발표를 시작했다.",
    options: ["곰곰이", "곰곰히"],
    correct: 0,
    principle: "부사 형성 접미사 중 '곰곰' 뒤에는 '이'가 붙어 '곰곰이'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: 곰곰이, 더욱이, 생긋이는 '이'로 끝납니다!"
  },
  {
    id: 20,
    question: "방 청소를 ( ) 깨끗하게 마쳤다.",
    options: ["깨끗이", "깨끗히"],
    correct: 0,
    principle: "'ㅅ' 받침 뒤의 부사화 접미사는 '이'로 적으므로 '깨끗이'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: 받침이 'ㅅ'으로 끝나면 대부분 '이'를 붙여요! (깨끗이, 느긋이)"
  },
  {
    id: 21,
    question: "친구의 장점을 마음껏 ( ) 주었다.",
    options: ["칭찬해", "층찬해"],
    correct: 0,
    principle: "좋은 점을 고쳐 올려 말하는 것은 '칭찬'입니다.",
    tip: "💡 세종대왕 꿀팁: '층찬'은 오타! 올바른 단어는 '칭찬'입니다."
  },
  {
    id: 22,
    question: "마스크를 ( ) 바르게 착용해 주세요.",
    options: ["반드시", "반듯이"],
    correct: 0,
    principle: "'틀림없이 꼭'의 뜻은 '반드시'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: 꼭 해야 하는 일은 '반드시'!"
  },
  {
    id: 23,
    question: "할머니께 안부 전화를 올리며 ( )를 드렸다.",
    options: ["문안 인사", "무난 인사"],
    correct: 0,
    principle: "웃어른께 안부를 여쭙는 인사는 '문안(問安) 인사'입니다.",
    tip: "💡 세종대왕 꿀팁: 안부를 여쭈는 것은 '문안 인사', 까다롭지 않은 것은 '무난하다'!"
  },
  {
    id: 24,
    question: "마트에서 물건값을 카드로 ( )했다.",
    options: ["결제", "결재"],
    correct: 0,
    principle: "대금을 지불하고 정산하는 것은 '결제(決濟)'입니다.",
    tip: "💡 세종대왕 꿀팁: 서류에 서명 승인받는 건 '결재', 돈 계산하는 건 '결제'!"
  },
  {
    id: 25,
    question: "부장님께 서류 승인을 받기 위해 ( )를 올렸다.",
    options: ["결재", "결제"],
    correct: 0,
    principle: "안건을 검토하여 승인받는 일은 '결재(決裁)'입니다.",
    tip: "💡 세종대왕 꿀팁: 결재 서류의 '재'는 옷을 마름질하듯 승인한다는 뜻!"
  },
  {
    id: 26,
    question: "손가락으로 저 멀리 있는 산을 ( ).",
    options: ["가리켰다", "가르쳤다"],
    correct: 0,
    principle: "방향이나 대상을 지목하는 것은 '가리키다'입니다.",
    tip: "💡 세종대왕 꿀팁: 지식이나 원리를 알려주는 건 '가르치다', 손으로 지목하는 건 '가리키다'!"
  },
  {
    id: 27,
    question: "선생님께서 우리에게 한글을 ( ).",
    options: ["가르쳐 주셨다", "가리켜 주셨다"],
    correct: 0,
    principle: "지식이나 배움을 전해 주는 것은 '가르치다'가 바른 표현입니다.",
    tip: "💡 세종대왕 꿀팁: 공부나 행동을 배우게 하는 건 '가르치다'!"
  },
  {
    id: 28,
    question: "너와 나의 생각이 서로 ( ).",
    options: ["다르다", "틀리다"],
    correct: 0,
    principle: "서로 같지 않은 것은 '다르다', 셈이나 답이 맞지 않는 것은 '틀리다'입니다.",
    tip: "💡 세종대왕 꿀팁: 같지 않은 건 '다르다'(Different), 오답인 건 '틀리다'(Wrong)!"
  },
  {
    id: 29,
    question: "수학 문제의 계산이 ( ).",
    options: ["틀렸다", "다르다"],
    correct: 0,
    principle: "계산이나 정답이 맞지 않고 오답인 경우 '틀리다'를 씁니다.",
    tip: "💡 세종대왕 꿀팁: 정답이 아니면 '틀렸다'!"
  },
  {
    id: 30,
    question: "온 힘을 다해 ( ) 달렸다.",
    options: ["죽기 살기로", "죽기살기로"],
    correct: 0,
    principle: "단어와 단어 사이는 띄어 쓰는 것이 원칙입니다.",
    tip: "💡 세종대왕 꿀팁: 각 단어는 원칙적으로 띄어 씁니다."
  },
  {
    id: 31,
    question: "마음속 깊은 곳에서 ( ) 우러나오는 고마움.",
    options: ["진심으로", "진심으론"],
    correct: 0,
    principle: "조사 '으로'가 붙은 '진심으로'가 바른 표현입니다.",
    tip: "💡 세종대왕 꿀팁: 거짓 없는 마음을 나타낼 땐 '진심으로'!"
  },
  {
    id: 32,
    question: "약속 장소에 늦지 않도록 ( ) 출발해라.",
    options: ["미리", "미리서"],
    correct: 0,
    principle: "어떤 일이 일어나기 전에 조치하는 부사는 '미리'입니다.",
    tip: "💡 세종대왕 꿀팁: '미리서'는 사투리 표현, 표준어는 '미리'!"
  },
  {
    id: 33,
    question: "오랜만에 고향 친구를 만나 ( ) 이야기를 나누었다.",
    options: ["정답게", "정댭게"],
    correct: 0,
    principle: "정이 넘치고 다정하다는 뜻은 '정답다'입니다.",
    tip: "💡 세종대왕 꿀팁: '정댭게'는 오타! 올바른 표현은 '정답게'입니다."
  },
  {
    id: 34,
    question: "오늘따라 햇살이 너무 ( ) 눈이 부시다.",
    options: ["눈부시게", "눈부시게도"],
    correct: 0,
    principle: "빛이 강렬하여 시린 것은 '눈부시다'입니다.",
    tip: "💡 세종대왕 꿀팁: 강한 빛을 나타낼 땐 '눈부시다'!"
  },
  {
    id: 35,
    question: "과자를 먹고 나면 부스러기를 ( ) 치워라.",
    options: ["깔끔하게", "깔끔히"],
    correct: 0,
    principle: "깨끗하고 정돈된 상태는 '깔끔하다'입니다.",
    tip: "💡 세종대왕 꿀팁: 형용사 '깔끔하다'의 부사형은 '깔끔하게' 또는 '깔끔히'가 모두 사용됩니다."
  },
  {
    id: 36,
    question: "동생이 유치원에서 상을 받자 온 가족이 ( ).",
    options: ["기뻐했다", "기뻐햇다"],
    correct: 0,
    principle: "과거형 어미는 '았/었'을 써서 '기뻐했다'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: 과거형에는 받침 'ㅆ'을 적어야 합니다!"
  },
  {
    id: 37,
    question: "길가에 핀 이쁜 꽃을 보니 마음이 ( ).",
    options: ["화사해진다", "화사해진답"],
    correct: 0,
    principle: "밝고 환하게 피어나는 상태는 '화사해지다'입니다.",
    tip: "💡 세종대왕 꿀팁: 화사하고 화사해진다는 올바른 단어 표기입니다."
  },
  {
    id: 38,
    question: "내 마음을 알아주는 친구가 있어서 참 ( ).",
    options: ["고맙다", "고맙아"],
    correct: 0,
    principle: "'ㅂ' 불규칙 활용으로 '고맙다' -> '고마워'로 활용합니다.",
    tip: "💡 세종대왕 꿀팁: '고맙다'의 활용형은 '고마워'입니다."
  },
  {
    id: 39,
    question: "어두운 밤길을 밝혀주는 ( ) 불빛.",
    options: ["가로등", "가로동"],
    correct: 0,
    principle: "길가에 세워 놓는 등은 '가로등(街路燈)'입니다.",
    tip: "💡 세종대왕 꿀팁: '가로동'은 오타! 올바른 단어는 '가로등'입니다."
  },
  {
    id: 40,
    question: "시간이 없으니 ( ) 서둘러 이동하자.",
    options: ["어서", "어서서"],
    correct: 0,
    principle: "지체 없이 즉시를 뜻하는 부사는 '어서'입니다.",
    tip: "💡 세종대왕 꿀팁: '어서서'는 잘못된 형태, 표준어는 '어서'!"
  },
  {
    id: 41,
    question: "학급 회의에서 다수의 의견에 ( ) 결정했다.",
    options: ["따라", "따라서"],
    correct: 0,
    principle: "어떤 기준이나 의사에 의거할 때는 '따라'를 사용합니다.",
    tip: "💡 세종대왕 꿀팁: 의사를 조율할 땐 '~에 따라'!"
  },
  {
    id: 42,
    question: "그 소식을 들은 사람들은 모두 ( ) 놀랐다.",
    options: ["깜짝", "깜짝이"],
    correct: 0,
    principle: "갑자기 일어난 일에 놀라는 모양은 부사 '깜짝'입니다.",
    tip: "💡 세종대왕 꿀팁: '깜짝 놀라다'가 올바른 표현입니다."
  },
  {
    id: 43,
    question: "시험공부를 ( ) 하여 좋은 성적을 받았다.",
    options: ["열심히", "열심이"],
    correct: 0,
    principle: "'하다'가 붙는 어원 중 '열심' 뒤에는 '히'가 붙어 '열심히'가 됩니다.",
    tip: "💡 세종대왕 꿀팁: 열심히, 솔직히, 꾸준히는 '히'로 끝납니다!"
  },
  {
    id: 44,
    question: "자기 생각을 ( ) 밝히는 것은 좋은 자세다.",
    options: ["솔직하게", "솔직이"],
    correct: 0,
    principle: "거짓이 없이 사실대로 밝히는 부사는 '솔직하게' 또는 '솔직히'입니다.",
    tip: "💡 세종대왕 꿀팁: '솔직이'는 틀린 표기! '솔직히/솔직하게'가 맞습니다."
  },
  {
    id: 45,
    question: "비가 온 뒤 날씨가 더욱 ( ) 맑아졌다.",
    options: ["깨끗하게", "깨끗이"],
    correct: 0,
    principle: "'ㅅ' 받침으로 끝난 단어 뒤의 부사화 접미사는 '이'가 표준입니다.",
    tip: "💡 세종대왕 꿀팁: '깨끗이'가 바른 표준 부사 표기입니다."
  },
  {
    id: 46,
    question: "동생은 매일 아침 일찍 ( ) 일어난다.",
    options: ["일찍이", "일찍히"],
    correct: 0,
    principle: "부사 '일찍' 뒤에 강조 접미사가 붙을 때는 '일찍이'가 됩니다.",
    tip: "💡 세종대왕 꿀팁: '일찍이'가 올바른 표기입니다."
  },
  {
    id: 47,
    question: "그 이야기는 참으로 ( ) 신기한 일이다.",
    options: ["희한하고", "희안하고"],
    correct: 0,
    principle: "드물고 신기함을 뜻하는 단어는 '희한하다'입니다.",
    tip: "💡 세종대왕 꿀팁: '희안'이 아니라 '희한'이 맞습니다!"
  },
  {
    id: 48,
    question: "운동장에서 공을 차며 ( ) 놀았다.",
    options: ["신나게", "신나이"],
    correct: 0,
    principle: "흥겹고 기분이 좋은 상태는 '신나다'입니다.",
    tip: "💡 세종대왕 꿀팁: '신나게 놀다'가 올바른 표현입니다."
  },
  {
    id: 49,
    question: "숙제를 정해진 시간 내에 ( ) 마쳤다.",
    options: ["차질 없이", "차질없이"],
    correct: 0,
    principle: "단어 '차질'과 '없이'는 띄어 쓰는 것이 원칙입니다.",
    tip: "💡 세종대왕 꿀팁: '차질 없이'처럼 띄어 씁니다."
  },
  {
    id: 50,
    question: "앞서가던 친구가 갑자기 뒤를 ( ).",
    options: ["돌아보았다", "돌아보앗다"],
    correct: 0,
    principle: "과거 어미 '았/었'을 사용하여 '돌아보았다'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: 과거형은 '았/었'을 사용합니다."
  },
  {
    id: 51,
    question: "사람들을 아주 많이 알고 아는 낯이 많은 사람은 ( ) 넓다.",
    options: ["발이", "손이"],
    correct: 0,
    principle: "아는 사람이 많고 활동 범위가 넓은 것을 '발이 넓다'라고 합니다.",
    tip: "💡 세종대왕 꿀팁: 아는 친구가 많을 땐 '발이 넓다'!"
  },
  {
    id: 52,
    question: "음식을 만들 때 재료를 아끼지 않고 푸짐하게 쓰는 것을 ( ) 크다라고 한다.",
    options: ["손이", "발이"],
    correct: 0,
    principle: "씀씀이가 크거나 넉넉하게 대접하는 것을 '손이 크다'라고 합니다.",
    tip: "💡 세종대왕 꿀팁: 음식을 넉넉하게 많이 만들 땐 '손이 크다'!"
  },
  {
    id: 53,
    question: "너무 바빠서 딴 데로 시선을 돌릴 여유도 없을 때는 ( ) 뜰 새 없다.",
    options: ["눈코", "입코"],
    correct: 0,
    principle: "정신없이 매우 바쁜 상태는 '눈코 뜰 새 없다'입니다.",
    tip: "💡 세종대왕 꿀팁: 몹시 바쁠 땐 '눈코 뜰 새 없다'!"
  },
  {
    id: 54,
    question: "어려운 일에 처한 친구를 돕기 위해 ( ) 벗고 나섰다.",
    options: ["발을", "손을"],
    correct: 0,
    principle: "적극적으로 앞장서서 돕는 행동을 '발을 벗고 나서다'라고 합니다.",
    tip: "💡 세종대왕 꿀팁: 적극적으로 도와줄 땐 '발을 벗고 나서다'!"
  },
  {
    id: 55,
    question: "비밀을 지키지 못하고 아무에게나 말해버리는 것을 ( ) 가볍다고 한다.",
    options: ["입이", "귀가"],
    correct: 0,
    principle: "말을 조심하지 않고 쉽게 전하는 태도는 '입이 가볍다'입니다.",
    tip: "💡 세종대왕 꿀팁: 비밀을 쉽게 말해버리면 '입이 가볍다'!"
  },
  {
    id: 56,
    question: "오래된 오해를 풀고 서로 화해하기 위해 ( ) 잡았다.",
    options: ["손을", "발을"],
    correct: 0,
    principle: "서로 협력하거나 화해하는 것을 '손을 잡다'라고 합니다.",
    tip: "💡 세종대왕 꿀팁: 서로 힘을 모으거나 화해할 땐 '손을 잡다'!"
  },
  {
    id: 57,
    question: "너무 후회스럽거나 안타까워서 ( ) 치며 울었다.",
    options: ["가슴을", "머리를"],
    correct: 0,
    principle: "통탄하거나 깊이 후회하는 행동을 '가슴을 치다'라고 합니다.",
    tip: "💡 세종대왕 꿀팁: 깊이 후회하거나 답답할 땐 '가슴을 치다'!"
  },
  {
    id: 58,
    question: "무슨 말을 해도 들은 척도 안 할 때 ( )으로 듣는다고 한다.",
    options: ["귓등", "귓속"],
    correct: 0,
    principle: "남의 말을 건성으로 흘려듣는 것을 '귓등으로 듣다'라고 합니다.",
    tip: "💡 세종대왕 꿀팁: 건성으로 안 듣는 건 '귓등으로 듣다'!"
  },
  {
    id: 59,
    question: "주위가 아주 조용하고 아무 소리도 안 들릴 때 ( ) 죽은 듯하다.",
    options: ["쥐", "새"],
    correct: 0,
    principle: "매우 조용하고 적막한 상태는 '쥐 죽은 듯이'라고 합니다.",
    tip: "💡 세종대왕 꿀팁: 쥐 죽은 듯 조용하다!"
  },
  {
    id: 60,
    question: "몹시 놀라거나 당황해서 ( )이 덜덜 떨렸다.",
    options: ["가슴", "얼굴"],
    correct: 0,
    principle: "심장이 심하게 뛰고 놀라는 상황을 비유하는 표현입니다.",
    tip: "💡 세종대왕 꿀팁: '가슴이 덜덜 떨리다'!"
  },
  {
    id: 61,
    question: "칠판에 적힌 글씨를 ( ) 공책에 옮겨 적었다.",
    options: ["바르게", "바루게"],
    correct: 0,
    principle: "삐뚤어지지 않고 바른 상태는 '바르다(바르게)'입니다.",
    tip: "💡 세종대왕 꿀팁: '바루게'는 오타! 올바른 단어는 '바르게'입니다."
  },
  {
    id: 62,
    question: "날씨가 쌀쌀하니 옷을 ( ) 껴입고 나가라.",
    options: ["따뜻하게", "따뜻이"],
    correct: 0,
    principle: "온기가 있는 상태는 '따뜻하다(따뜻하게)'입니다.",
    tip: "💡 세종대왕 꿀팁: '따뜻하게 껴입다'가 자연스러운 표현입니다."
  },
  {
    id: 63,
    question: "맛있는 음식 냄새가 코를 ( ).",
    options: ["찔렀다", "찌렀다"],
    correct: 0,
    principle: "기본형 '찌르다'의 과거형은 'ㄹ' 받침이 살아나 '찔렀다'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: '찌르다' -> '찔렀다'가 올바른 활용형입니다!"
  },
  {
    id: 64,
    question: "새로 산 신발이 발에 꼭 ( ).",
    options: ["맞는다", "맞는답"],
    correct: 0,
    principle: "알맞거나 호환되는 것은 '맞다(맞는다)'가 올바릅니다.",
    tip: "💡 세종대왕 꿀팁: 신발이나 옷이 꼭 어울릴 땐 '맞는다'!"
  },
  {
    id: 65,
    question: "오늘 하루도 즐겁고 ( ) 보내세요.",
    options: ["보람차게", "보람차이"],
    correct: 0,
    principle: "보람이 가득하다는 뜻은 '보람차다(보람차게)'입니다.",
    tip: "💡 세종대왕 꿀팁: '보람차게 보내다'가 올바른 표현입니다."
  },
  {
    id: 66,
    question: "친구와 어깨동무를 하고 ( ) 걸어갔다.",
    options: ["나란히", "나란이"],
    correct: 0,
    principle: "'나란하다'에서 부사화 접미사 '히'가 붙어 '나란히'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: 나란히, 솔직히, 나란히가 바른 표기입니다."
  },
  {
    id: 67,
    question: "어려운 이웃을 돕는 정성이 참으로 ( ).",
    options: ["지극하다", "지극히"],
    correct: 0,
    principle: "지극정성이나 정성이 넘치는 상태는 '지극하다'입니다.",
    tip: "💡 세종대왕 꿀팁: 정성이 가득한 모습은 '지극하다'!"
  },
  {
    id: 68,
    question: "친구의 질문에 ( ) 답을 해주었다.",
    options: ["친절하게", "친절히"],
    correct: 0,
    principle: "'친절하다'의 부사형은 '친절하게' 또는 '친절히' 둘 다 올바릅니다.",
    tip: "💡 세종대왕 꿀팁: '친절하게'가 가장 자연스러운 표현입니다."
  },
  {
    id: 69,
    question: "학교를 마친 후 집으로 ( ) 돌아왔다.",
    options: ["곧바로", "곧바로서"],
    correct: 0,
    principle: "지체 없이 바로를 뜻하는 부사는 '곧바로'입니다.",
    tip: "💡 세종대왕 꿀팁: '곧바로'가 올바른 표준 부사입니다."
  },
  {
    id: 70,
    question: "기분이 아주 신나서 ( ) 춤을 췄다.",
    options: ["덩실덩실", "덩실덩실이"],
    correct: 0,
    principle: "신나서 몸을 춤추는 모양은 첩어 부사 '덩실덩실'입니다.",
    tip: "💡 세종대왕 꿀팁: '덩실덩실 춤을 추다'!"
  },
  {
    id: 71,
    question: "친구의 생일을 축하해 주기 위해 선물을 ( ).",
    options: ["준비했다", "준비햇다"],
    correct: 0,
    principle: "과거형 어미 '았/었'을 사용하여 '준비했다'가 바릅니다.",
    tip: "💡 세종대왕 꿀팁: 과거형 받침은 'ㅆ'입니다!"
  },
  {
    id: 72,
    question: "동생이 넘어져서 피가 나자 깜짝 ( ).",
    options: ["놀랐다", "놀랫다"],
    correct: 0,
    principle: "'놀라다'의 과거형은 '놀랐다'가 바른 표기입니다.",
    tip: "💡 세종대왕 꿀팁: '놀랫다'는 오타, '놀랐다'가 정답!"
  },
  {
    id: 73,
    question: "선생님의 은혜에 깊이 ( ).",
    options: ["감사드립니다", "감사드림니다"],
    correct: 0,
    principle: "격식체 종결 어미는 '습니다/드립니다'가 올바릅니다.",
    tip: "💡 세종대왕 꿀팁: '드림니다'는 오타! '드립니다'가 맞습니다."
  },
  {
    id: 74,
    question: "시험 범위 내용을 노트에 ( ) 정리했다.",
    options: ["꼼꼼하게", "꼼꼼이"],
    correct: 0,
    principle: "빈틈이 없음을 뜻하는 형용사 '꼼꼼하다'의 부사형은 '꼼꼼하게/꼼꼼히'입니다.",
    tip: "💡 세종대왕 꿀팁: '꼼꼼이'는 틀린 표기! '꼼꼼하게/꼼꼼히'가 맞습니다."
  },
  {
    id: 75,
    question: "마음에 드는 책을 찾아서 ( ) 읽었다.",
    options: ["재미있게", "재미잇게"],
    correct: 0,
    principle: "존재를 나타내는 어원 '있다'의 활용형은 '있게'입니다.",
    tip: "💡 세종대왕 꿀팁: 받침 'ㅆ'을 적는 것이 올바릅니다."
  },
  {
    id: 76,
    question: "소풍날 비가 오지 않고 날씨가 ( ) 좋겠다.",
    options: ["맑으면", "막으면"],
    correct: 0,
    principle: "날씨가 맑은 상태를 뜻할 때는 'ㄹㄱ' 받침의 '맑으면'이 맞습니다.",
    tip: "💡 세종대왕 꿀팁: '맑다'의 어간 '맑-'을 밝혀 적습니다."
  },
  {
    id: 77,
    question: "어려운 문제를 끝까지 포기하지 않고 ( ).",
    options: ["해냈다", "해넷다"],
    correct: 0,
    principle: "성취를 뜻하는 '해내다'의 과거형은 '해냈다'입니다.",
    tip: "💡 세종대왕 꿀팁: 과거 어미 받침 'ㅆ'을 씁니다."
  },
  {
    id: 78,
    question: "우리 반이 운동회 축구 시합에서 ( ).",
    options: ["우승했다", "우승햇다"],
    correct: 0,
    principle: "우승을 거둔 과거 사실은 '우승했다'가 올바릅니다.",
    tip: "💡 세종대왕 꿀팁: 과거형 표기는 받침 'ㅆ'!"
  },
  {
    id: 79,
    question: "선생님 말씀에 맞춰 모두 ( ) 대답했다.",
    options: ["네", "예"],
    correct: 0,
    principle: "대답할 때 쓰는 '네'와 '예'는 모두 표준어입니다.",
    tip: "💡 세종대왕 꿀팁: '네'와 '예' 모두 바른 표현입니다."
  },
  {
    id: 80,
    question: "앞으로도 맞춤법을 공부하고 ( ) 노력하겠다.",
    options: ["바르게", "바루게"],
    correct: 0,
    principle: "올바른 상태를 뜻하는 단어는 '바르게'입니다.",
    tip: "💡 세종대왕 꿀팁: 바른 맞춤법은 '바르게'!"
  },
  {
    id: 81,
    question: "친구의 질문에 성심성의껏 ( ) 답변했다.",
    options: ["성실하게", "성실히"],
    correct: 0,
    principle: "정성스럽고 참된 태도는 '성실하다(성실하게)'입니다.",
    tip: "💡 세종대왕 꿀팁: '성실하게 답변하다'가 자연스럽습니다."
  },
  {
    id: 82,
    question: "어두운 밤하늘에 반짝이는 별이 ( ).",
    options: ["빛났다", "빛냣다"],
    correct: 0,
    principle: "'빛나다'의 과거형은 '빛났다'가 바른 표기입니다.",
    tip: "💡 세종대왕 꿀팁: 과거형에는 받침 'ㅆ'!"
  },
  {
    id: 83,
    question: "내일도 아침 일찍 학교에 ( ) 오너라.",
    options: ["잊지 말고", "잊지말고"],
    correct: 0,
    principle: "동사와 보조 용언 '말다' 사이는 띄어 씁니다.",
    tip: "💡 세종대왕 꿀팁: '잊지 말고'처럼 띄어 씁니다."
  },
  {
    id: 84,
    question: "어려움을 극복하고 마침내 ( ) 승리했다.",
    options: ["값진", "갑진"],
    correct: 0,
    principle: "가치가 있다는 뜻의 형용사는 '값지다(값진)'가 올바릅니다.",
    tip: "💡 세종대왕 꿀팁: 받침 'ㅄ'이 들어간 '값진'이 맞는 표기입니다!"
  },
  {
    id: 85,
    question: "서로 배려하고 존중하는 ( ) 학급을 만들자.",
    options: ["행복한", "행복햔"],
    correct: 0,
    principle: "기쁨과 만복이 가득한 상태는 '행복하다(행복한)'입니다.",
    tip: "💡 세종대왕 꿀팁: 올바른 단어는 '행복한'입니다."
  },
  {
    id: 86,
    question: "친구와 사이좋게 지내기로 ( ).",
    options: ["약속했다", "약속햇다"],
    correct: 0,
    principle: "과거 사실을 나타낼 땐 받침 'ㅆ'의 '약속했다'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: 과거형 어미는 '았/었'!"
  },
  {
    id: 87,
    question: "맛있는 음식을 나누어 먹으니 ( ) 좋다.",
    options: ["더욱더", "더욱 더"],
    correct: 0,
    principle: "부사 '더욱더'는 한 단어로 붙여 쓸 수 있습니다.",
    tip: "💡 세종대왕 꿀팁: '더욱더'는 붙여 쓰는 것이 허용됩니다."
  },
  {
    id: 88,
    question: "오늘 공부한 내용을 다시 한번 ( ) 복습하자.",
    options: ["차근차근", "차근차근히"],
    correct: 0,
    principle: "순서대로 차분히 진행하는 부사는 '차근차근'입니다.",
    tip: "💡 세종대왕 꿀팁: '차근차근'이 바른 표현입니다."
  },
  {
    id: 89,
    question: "맞춤법 퀴즈 100점을 받아 기분이 참 ( ).",
    options: ["뿌듯하다", "뿌듯햣다"],
    correct: 0,
    principle: "기쁨과 만족감이 가득한 상태는 '뿌듯하다'입니다.",
    tip: "💡 세종대왕 꿀팁: 올바른 표준어는 '뿌듯하다'입니다."
  },
  {
    id: 90,
    question: "우리 모두 바른 맞춤법을 쓰는 ( ) 어린이가 되자.",
    options: ["멋진", "멋찐"],
    correct: 0,
    principle: "훌륭하고 근사하다는 뜻의 형용사는 '멋지다(멋진)'입니다.",
    tip: "💡 세종대왕 꿀팁: '멋찐'은 오타! '멋진'이 바른 맞춤법입니다."
  },
  {
    id: 91,
    question: "어느덧 소풍 날짜가 ( ) 다가왔다.",
    options: ["성큼", "성큼이"],
    correct: 0,
    principle: "크게 걸어오거나 성큼 다가오는 부사는 '성큼'입니다.",
    tip: "💡 세종대왕 꿀팁: '성큼 다가오다'가 올바른 표현입니다."
  },
  {
    id: 92,
    question: "선생님 말씀을 마음에 깊이 ( ).",
    options: ["새겼다", "새겻다"],
    correct: 0,
    principle: "'새기다'의 과거형은 '새겼다'가 올바른 표현입니다.",
    tip: "💡 세종대왕 꿀팁: 과거형 어미 받침 'ㅆ'!"
  },
  {
    id: 93,
    question: "힘든 일도 서로 돕다 보니 ( ) 해결되었다.",
    options: ["어느새", "어느세"],
    correct: 0,
    principle: "'어느 사이'가 줄어든 말은 '어느새'가 올바릅니다.",
    tip: "💡 세종대왕 꿀팁: '어느 사이' -> '어느새'!"
  },
  {
    id: 94,
    question: "친구에게 미안한 마음을 ( ) 전달했다.",
    options: ["솔직하게", "솔직이"],
    correct: 0,
    principle: "거짓 없는 마음을 전할 때는 '솔직하게'가 맞습니다.",
    tip: "💡 세종대왕 꿀팁: '솔직이'는 오타! '솔직하게/솔직히'가 맞습니다."
  },
  {
    id: 95,
    question: "오늘 하루도 감사하는 마음으로 ( ).",
    options: ["마무리했다", "마무리햇다"],
    correct: 0,
    principle: "과거형 표기는 받침 'ㅆ'의 '마무리했다'가 바릅니다.",
    tip: "💡 세종대왕 꿀팁: 과거형은 '았/었'!"
  },
  {
    id: 96,
    question: "선생님의 따뜻한 격려에 마음이 ( ).",
    options: ["훈훈해졌다", "훈훈해졋다"],
    correct: 0,
    principle: "따스함이 감도는 과거형 표현은 '훈훈해졌다'입니다.",
    tip: "💡 세종대왕 꿀팁: 과거 어미 받침 'ㅆ'!"
  },
  {
    id: 97,
    question: "우리가 함께 만든 추억을 오랫동안 ( ).",
    options: ["간직하자", "간직하쟈"],
    correct: 0,
    principle: "청유형 어미는 '하자'가 올바릅니다.",
    tip: "💡 세종대왕 꿀팁: '간직하쟈'는 오타! '간직하자'가 맞습니다."
  },
  {
    id: 98,
    question: "매일 조금씩 맞춤법을 익히니 어휘력이 ( ).",
    options: ["쑥쑥 늘어난다", "쑥쑥 느러난다"],
    correct: 0,
    principle: "성장하고 증가하는 것은 '늘어나다'가 바른 표현입니다.",
    tip: "💡 세종대왕 꿀팁: '느러난다'는 소리 나는 대로 쓴 오타! '늘어난다'가 맞습니다."
  },
  {
    id: 99,
    question: "학급 규칙을 잘 지키며 다 함께 ( ).",
    options: ["노력하자", "노력하쟈"],
    correct: 0,
    principle: "청유형 어미 '하자'를 사용하는 것이 올바른 표현입니다.",
    tip: "💡 세종대왕 꿀팁: '노력하자'가 바른 표기입니다."
  },
  {
    id: 100,
    question: "열심히 노력한 결과 마침내 맞춤법 ( )이 되었다!",
    options: ["달인", "다린"],
    correct: 0,
    principle: "어떤 분야에 통달한 사람을 뜻하는 표준어는 '달인(達人)'입니다.",
    tip: "💡 세종대왕 꿀팁: '다린'은 소리 나는 대로 적은 오타! '달인'이 맞습니다."
  }
];

// 데이터 유효성 검사 함수
function validateQuestionBank() {
  const errors = [];
  questionBank.forEach((q) => {
    const uniqueOptions = new Set(q.options);
    if (uniqueOptions.size !== q.options.length) {
      errors.push(`[ID ${q.id}] 보기 중복 발견: ${JSON.stringify(q.options)}`);
    }
    if (q.correct < 0 || q.correct >= q.options.length) {
      errors.push(`[ID ${q.id}] 정답 인덱스 오류: correct=${q.correct}`);
    }
  });

  if (errors.length > 0) {
    console.error("⚠️ 데이터베이스 유효성 검사 오류:", errors);
  } else {
    console.log(`✅ 총 ${questionBank.length}개 맞춤법 문제 데이터베이스 유효성 검사 완벽 통과!`);
  }
}
validateQuestionBank();

// 상태 변수
let currentUser = null;
let activeQuizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

// DOM 요소 참조
const loginScreen = document.getElementById('login-screen');
const lobbyScreen = document.getElementById('lobby-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const rankingScreen = document.getElementById('ranking-screen');

const authStartBtn = document.getElementById('auth-start-btn');
const guestStartBtn = document.getElementById('guest-start-btn');
const logoutBtn = document.getElementById('logout-btn');
const rankingOpenBtn = document.getElementById('ranking-open-btn');
const rankingBackBtn = document.getElementById('ranking-back-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const goLobbyBtn = document.getElementById('go-lobby-btn');

const topUserNameEl = document.getElementById('top-user-name');
const userAvatarCharEl = document.getElementById('user-avatar-char');
const welcomeUserNameEl = document.getElementById('welcome-user-name');
const userBestScoreEl = document.getElementById('user-best-score');
const userQuizClearsEl = document.getElementById('user-quiz-clears');

const quizStudentBadge = document.getElementById('quiz-student-badge');
const currentQuestionNumEl = document.getElementById('current-question-num');
const progressBarEl = document.getElementById('progress-bar');
const qNumberTextEl = document.getElementById('q-number-text');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const finalScoreEl = document.getElementById('final-score');
const resultEmojiEl = document.getElementById('result-emoji');
const resultTitleEl = document.getElementById('result-title');
const resultStudentInfoEl = document.getElementById('result-student-info');
const scoreSummaryTextEl = document.getElementById('score-summary-text');
const reviewContainer = document.getElementById('review-container');
const myHistoryList = document.getElementById('my-history-list');
const rankListContainer = document.getElementById('rank-list-container');

// 이벤트 리스너 등록
authStartBtn.addEventListener('click', handleStudentAuth);
guestStartBtn.addEventListener('click', handleGuestAuth);
logoutBtn.addEventListener('click', handleLogout);
startQuizBtn.addEventListener('click', startQuizSession);

prevBtn.addEventListener('click', goToPrevQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', startQuizSession);
goLobbyBtn.addEventListener('click', () => switchScreen(lobbyScreen));

rankingOpenBtn.addEventListener('click', () => {
  renderHallOfFame();
  switchScreen(rankingScreen);
});
rankingBackBtn.addEventListener('click', () => switchScreen(lobbyScreen));

// 앱 초기화 및 로컬 세션 확인
window.addEventListener('DOMContentLoaded', () => {
  const savedPlayer = localStorage.getItem('spelmaker-player');
  if (savedPlayer) {
    currentUser = JSON.parse(savedPlayer);
    enterLobby();
  } else {
    switchScreen(loginScreen);
  }
});

// 화면 전환 함수
function switchScreen(targetScreen) {
  [loginScreen, lobbyScreen, quizScreen, resultScreen, rankingScreen].forEach(screen => {
    screen.classList.remove('active');
    screen.classList.add('hidden');
  });

  targetScreen.classList.remove('hidden');
  targetScreen.classList.add('active');
}

// 학생 등록 / 로그인 처리
function handleStudentAuth() {
  const grade = document.getElementById('student-grade').value.trim();
  const classNum = document.getElementById('student-class').value.trim();
  const num = document.getElementById('student-num').value.trim();
  const name = document.getElementById('student-name').value.trim();
  const pass = document.getElementById('student-pass').value.trim();

  if (!grade || !classNum || !num || !name || !pass) {
    alert('⚠️ 학년, 반, 번호, 성함, 비밀번호를 모두 입력해 주세요!');
    return;
  }

  const uid = `std_${grade}_${classNum}_${num}_${name}`;
  const displayName = `${grade}학년 ${classNum}반 ${num}번 ${name} 유생`;

  let usersDB = JSON.parse(localStorage.getItem('spelmaker-users-db') || '{}');

  if (!usersDB[uid]) {
    usersDB[uid] = {
      uid: uid,
      displayName: displayName,
      grade: grade,
      classNum: classNum,
      studentNum: num,
      name: name,
      pass: pass,
      bestScore: 0,
      totalClears: 0
    };
  } else {
    if (usersDB[uid].pass !== pass) {
      alert('🔒 비밀번호가 일치하지 않습니다. 비밀번호를 다시 확인해 주세요!');
      return;
    }
  }

  localStorage.setItem('spelmaker-users-db', JSON.stringify(usersDB));
  currentUser = usersDB[uid];
  localStorage.setItem('spelmaker-player', JSON.stringify(currentUser));

  enterLobby();
}

// 게스트 로그인 처리
function handleGuestAuth() {
  const randomId = Math.floor(Math.random() * 8999) + 1000;
  const displayName = `게스트 유생 #${randomId}`;
  const uid = `guest_${randomId}`;

  currentUser = {
    uid: uid,
    displayName: displayName,
    grade: '체험',
    classNum: '게스트',
    studentNum: '0',
    name: displayName,
    pass: 'guest',
    bestScore: 0,
    totalClears: 0
  };

  localStorage.setItem('spelmaker-player', JSON.stringify(currentUser));
  enterLobby();
}

function handleLogout() {
  localStorage.removeItem('spelmaker-player');
  currentUser = null;
  switchScreen(loginScreen);
}

function enterLobby() {
  if (!currentUser) return;

  topUserNameEl.textContent = currentUser.displayName;
  welcomeUserNameEl.textContent = currentUser.name;
  userAvatarCharEl.textContent = currentUser.name[0] || '유';

  userBestScoreEl.textContent = `${currentUser.bestScore || 0}점`;
  userQuizClearsEl.textContent = `${currentUser.totalClears || 0}회`;

  renderMyHistory();
  switchScreen(lobbyScreen);
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startQuizSession() {
  if (!currentUser) return;

  const shuffled = shuffleArray(questionBank);
  activeQuizQuestions = shuffled.slice(0, 10);
  currentQuestionIndex = 0;
  userAnswers = new Array(10).fill(null);

  quizStudentBadge.textContent = `👑 ${currentUser.displayName}`;

  switchScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const qData = activeQuizQuestions[currentQuestionIndex];

  currentQuestionNumEl.textContent = currentQuestionIndex + 1;
  qNumberTextEl.textContent = currentQuestionIndex + 1;
  const progressPercent = ((currentQuestionIndex + 1) / activeQuizQuestions.length) * 100;
  progressBarEl.style.width = `${progressPercent}%`;

  questionTextEl.textContent = qData.question;

  optionsContainer.innerHTML = '';
  qData.options.forEach((optText, index) => {
    const optBtn = document.createElement('button');
    optBtn.className = 'option-btn';
    if (userAnswers[currentQuestionIndex] === index) {
      optBtn.classList.add('selected');
    }

    optBtn.innerHTML = `
      <span class="option-num">${index + 1}</span>
      <span class="option-label">${optText}</span>
    `;

    optBtn.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optBtn);
  });

  prevBtn.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === activeQuizQuestions.length - 1) {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    submitBtn.disabled = userAnswers[currentQuestionIndex] === null;
  } else {
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    nextBtn.disabled = userAnswers[currentQuestionIndex] === null;
  }
}

function selectOption(index) {
  userAnswers[currentQuestionIndex] = index;

  const optBtns = optionsContainer.querySelectorAll('.option-btn');
  optBtns.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  if (currentQuestionIndex === activeQuizQuestions.length - 1) {
    submitBtn.disabled = false;
  } else {
    nextBtn.disabled = false;
  }
}

function goToPrevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function goToNextQuestion() {
  if (currentQuestionIndex < activeQuizQuestions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

// 퀴즈 제출 및 세종대왕님 칭찬 메시지 채점
function submitQuiz() {
  let correctCount = 0;
  activeQuizQuestions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const finalScore = correctCount * 10;

  saveQuizRecordToDB(finalScore, correctCount);

  switchScreen(resultScreen);

  resultStudentInfoEl.textContent = `🎓 ${currentUser.displayName}의 훈민정음 성적표`;
  scoreSummaryTextEl.textContent = `총 10문제 중 ${correctCount}문제 정답!`;

  if (finalScore === 100) {
    resultEmojiEl.textContent = '👑';
    resultTitleEl.textContent = '👑 세종대왕 옥새 칭찬! 완벽한 100점 만점이로다!';
    launchConfetti();
  } else if (finalScore >= 80) {
    resultEmojiEl.textContent = '🎉';
    resultTitleEl.textContent = '🎉 참 잘하였도다! 장차 큰 한글 학자가 되겠구나!';
    launchConfetti();
  } else if (finalScore >= 60) {
    resultEmojiEl.textContent = '👍';
    resultTitleEl.textContent = '👍 좋은 노력이로다! 조금만 더 복습해보거라!';
  } else {
    resultEmojiEl.textContent = '📖';
    resultTitleEl.textContent = '📖 세종대왕님의 교지 오답노트를 보고 다시 도전해보거라!';
  }

  animateScore(finalScore);
  renderReviewList();
}

function saveQuizRecordToDB(score, correctCount) {
  if (!currentUser) return;

  const now = new Date();
  const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const recordObj = {
    id: `REC_${Date.now()}`,
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    score: score,
    correctCount: correctCount,
    totalCount: 10,
    date: timeString
  };

  let recordsDB = JSON.parse(localStorage.getItem('spelmaker-quiz-records') || '[]');
  recordsDB.unshift(recordObj);
  localStorage.setItem('spelmaker-quiz-records', JSON.stringify(recordsDB));

  currentUser.totalClears = (currentUser.totalClears || 0) + 1;
  if (score > (currentUser.bestScore || 0)) {
    currentUser.bestScore = score;
  }

  localStorage.setItem('spelmaker-player', JSON.stringify(currentUser));

  let usersDB = JSON.parse(localStorage.getItem('spelmaker-users-db') || '{}');
  if (usersDB[currentUser.uid]) {
    usersDB[currentUser.uid].bestScore = currentUser.bestScore;
    usersDB[currentUser.uid].totalClears = currentUser.totalClears;
    localStorage.setItem('spelmaker-users-db', JSON.stringify(usersDB));
  }
}

function renderMyHistory() {
  if (!currentUser) return;

  let recordsDB = JSON.parse(localStorage.getItem('spelmaker-quiz-records') || '[]');
  const myRecords = recordsDB.filter(r => r.uid === currentUser.uid);

  myHistoryList.innerHTML = '';

  if (myRecords.length === 0) {
    myHistoryList.innerHTML = '<div class="history-item"><span class="history-date">아직 응시한 성적표가 없습니다. 첫 퀴즈에 도전해보거라!</span></div>';
    return;
  }

  myRecords.slice(0, 5).forEach(rec => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <span class="history-date">📜 ${rec.date}</span>
      <span class="history-score">${rec.score}점 <small>(${rec.correctCount}/10)</small></span>
    `;
    myHistoryList.appendChild(item);
  });
}

function renderHallOfFame() {
  let usersDB = JSON.parse(localStorage.getItem('spelmaker-users-db') || '{}');
  let usersList = Object.values(usersDB);

  if (currentUser && currentUser.uid.startsWith('guest_')) {
    if (!usersList.find(u => u.uid === currentUser.uid)) {
      usersList.push(currentUser);
    }
  }

  usersList.sort((a, b) => {
    if (b.bestScore !== a.bestScore) {
      return b.bestScore - a.bestScore;
    }
    return (b.totalClears || 0) - (a.totalClears || 0);
  });

  rankListContainer.innerHTML = '';

  if (usersList.length === 0) {
    rankListContainer.innerHTML = '<div class="rank-row"><span>등록된 유생이 아직 없습니다.</span></div>';
    return;
  }

  usersList.forEach((user, idx) => {
    const row = document.createElement('div');
    row.className = `rank-row rank-${idx + 1}`;
    
    const rankEmoji = idx === 0 ? '🥇 으뜸 유생' : idx === 1 ? '🥈 버금 유생' : idx === 2 ? '🥉 딸림 유생' : `${idx + 1}위`;
    const isMe = currentUser && currentUser.uid === user.uid;

    row.innerHTML = `
      <span class="rank-num">${rankEmoji}</span>
      <span class="rank-name">${user.displayName} ${isMe ? ' <small style="color:#4338ca;">(나)</small>' : ''}</span>
      <span class="rank-score">${user.bestScore || 0}점 <small style="font-size:0.8rem; color:#64748b;">(${user.totalClears || 0}회 완수)</small></span>
    `;

    rankListContainer.appendChild(row);
  });
}

function animateScore(targetScore) {
  let current = 0;
  const duration = 1200;
  const stepTime = 30;
  const increment = targetScore / (duration / stepTime);

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetScore) {
      current = targetScore;
      clearInterval(timer);
    }
    finalScoreEl.textContent = Math.round(current);
  }, stepTime);
}

function renderReviewList() {
  reviewContainer.innerHTML = '';

  activeQuizQuestions.forEach((q, idx) => {
    const userChoiceIdx = userAnswers[idx];
    const isCorrect = userChoiceIdx === q.correct;

    const card = document.createElement('div');
    card.className = `review-card ${isCorrect ? 'correct' : 'incorrect'}`;

    const userChoiceText = userChoiceIdx !== null ? `${userChoiceIdx + 1}. ${q.options[userChoiceIdx]}` : '선택 안 함';
    const correctChoiceText = `${q.correct + 1}. ${q.options[q.correct]}`;

    card.innerHTML = `
      <div class="review-card-header">
        <span class="review-q-num">문제 ${idx + 1}</span>
        <span class="review-status-badge ${isCorrect ? 'correct' : 'incorrect'}">
          ${isCorrect ? '정답 🎉' : '오답 ❌'}
        </span>
      </div>
      <div class="review-q-title">${q.question}</div>
      <div class="review-answers-box">
        <div class="user-ans ${isCorrect ? '' : 'wrong'}">
          <strong>내가 고른 답:</strong> ${userChoiceText}
        </div>
        ${!isCorrect ? `<div class="correct-ans"><strong>정답:</strong> ${correctChoiceText}</div>` : ''}
      </div>
      <div class="explanation-box">
        <div class="explanation-title">📌 세종대왕님의 올바른 맞춤법 교지</div>
        <div class="explanation-principle">${q.principle}</div>
        <div class="explanation-tip">${q.tip}</div>
      </div>
    `;

    reviewContainer.appendChild(card);
  });
}

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

  const particles = [];
  const colors = ['#f59e0b', '#4338ca', '#10b981', '#e11d48', '#a855f7'];

  for (let i = 0; i < 75; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 6 + 4,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 100
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      if (p.life > 0) {
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.22;
        p.life -= 1.4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 100;
        ctx.fill();
      }
    });

    if (alive) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  render();
}
