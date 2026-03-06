/**
 * Google Apps Script - 숙소 예약 홈페이지 정보 수집 폼 생성
 *
 * 사용법:
 * 1. https://script.google.com 접속
 * 2. 새 프로젝트 생성
 * 3. 이 코드 전체를 붙여넣기
 * 4. createMotelBookingForm() 함수 실행
 * 5. 생성된 폼 URL이 로그에 출력됩니다 (Ctrl+Enter 로 로그 확인)
 */

function createMotelBookingForm() {
  const form = FormApp.create('숙소 예약 홈페이지 - 필요 정보');
  form.setDescription(
    '홈페이지 완성을 위해 아래 정보가 필요합니다.\n' +
    '한꺼번에 다 작성하지 않으셔도 됩니다. 아는 항목부터 채워주시고, 나머지는 추후 업데이트 가능합니다.\n\n' +
    '* 표시 항목은 필수입니다.'
  );
  form.setConfirmationMessage('감사합니다! 보내주신 내용을 확인 후 반영하겠습니다.');
  form.setAllowResponseEdits(true);

  // ──────────────────────────────
  // 섹션 1: 숙소 기본 정보
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('1. 숙소 기본 정보')
    .setHelpText('홈페이지에 표시될 기본 정보입니다.');

  form.addTextItem()
    .setTitle('숙소 이름 (브랜드명)')
    .setHelpText('예: Gangnam Residence, Seoul Monthly Stay')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('주소 (한글)')
    .setHelpText('예: 서울시 강남구 강남대로 123')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('주소 (영문)')
    .setHelpText('예: 123, Gangnam-daero, Gangnam-gu, Seoul, South Korea')
    .setRequired(true);

  form.addTextItem()
    .setTitle('전화번호')
    .setHelpText('국제 형식 포함. 예: +82-10-1234-5678')
    .setRequired(true);

  form.addTextItem()
    .setTitle('이메일')
    .setHelpText('문의/예약 확인용. 예: info@yourstay.com')
    .setRequired(true);

  form.addTextItem()
    .setTitle('카카오톡 / LINE / WeChat ID')
    .setHelpText('외국인 메신저 문의용 (선택)');

  form.addTextItem()
    .setTitle('체크인 시간')
    .setHelpText('예: 15:00 (오후 3시)')
    .setRequired(true);

  form.addTextItem()
    .setTitle('체크아웃 시간')
    .setHelpText('예: 11:00 (오전 11시)')
    .setRequired(true);

  // ──────────────────────────────
  // 섹션 2: 객실 타입 1
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('2. 객실 정보 - 타입 1')
    .setHelpText('가장 기본이 되는 객실 타입부터 작성해주세요.');

  form.addTextItem()
    .setTitle('[타입1] 방 이름')
    .setHelpText('예: 스탠다드, 원룸, A타입')
    .setRequired(true);

  form.addTextItem()
    .setTitle('[타입1] 월 가격')
    .setHelpText('통화 포함. 예: 80만원, $800')
    .setRequired(true);

  form.addTextItem()
    .setTitle('[타입1] 해당 타입 총 방 개수')
    .setHelpText('예: 3개')
    .setRequired(true);

  form.addTextItem()
    .setTitle('[타입1] 최대 인원')
    .setHelpText('예: 2명')
    .setRequired(true);

  form.addTextItem()
    .setTitle('[타입1] 방 크기')
    .setHelpText('예: 25m² (7.5평)');

  form.addTextItem()
    .setTitle('[타입1] 침대 타입')
    .setHelpText('예: 퀸베드, 더블, 싱글×2')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('[타입1] 편의시설')
    .setHelpText('해당되는 항목을 모두 선택해주세요.')
    .setChoiceValues([
      'WiFi', '에어컨', 'TV', '냉장고', '전자레인지',
      '세탁기', '건조기', '풀 키친 (가스/인덕션+싱크대)',
      '간이 주방 (전자레인지+전기포트)', '개인 욕실',
      '헤어드라이어', '다리미', '책상', '옷장/수납장',
      '발코니', '시티뷰'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('[타입1] 방 설명 (한국어)')
    .setHelpText('2~3문장이면 충분합니다. 영어/일어/중국어는 번역해드립니다.');

  // ──────────────────────────────
  // 섹션 3: 객실 타입 2
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('3. 객실 정보 - 타입 2')
    .setHelpText('두 번째 객실 타입. 없으면 비워두셔도 됩니다.');

  form.addTextItem()
    .setTitle('[타입2] 방 이름')
    .setHelpText('예: 디럭스, 투룸, B타입');

  form.addTextItem()
    .setTitle('[타입2] 월 가격')
    .setHelpText('통화 포함');

  form.addTextItem()
    .setTitle('[타입2] 해당 타입 총 방 개수');

  form.addTextItem()
    .setTitle('[타입2] 최대 인원');

  form.addTextItem()
    .setTitle('[타입2] 방 크기');

  form.addTextItem()
    .setTitle('[타입2] 침대 타입');

  form.addCheckboxItem()
    .setTitle('[타입2] 편의시설')
    .setChoiceValues([
      'WiFi', '에어컨', 'TV', '냉장고', '전자레인지',
      '세탁기', '건조기', '풀 키친 (가스/인덕션+싱크대)',
      '간이 주방 (전자레인지+전기포트)', '개인 욕실',
      '헤어드라이어', '다리미', '책상', '옷장/수납장',
      '발코니', '시티뷰'
    ]);

  form.addParagraphTextItem()
    .setTitle('[타입2] 방 설명 (한국어)');

  // ──────────────────────────────
  // 섹션 4: 객실 타입 3
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('4. 객실 정보 - 타입 3')
    .setHelpText('세 번째 객실 타입. 없으면 비워두셔도 됩니다.');

  form.addTextItem()
    .setTitle('[타입3] 방 이름');

  form.addTextItem()
    .setTitle('[타입3] 월 가격');

  form.addTextItem()
    .setTitle('[타입3] 해당 타입 총 방 개수');

  form.addTextItem()
    .setTitle('[타입3] 최대 인원');

  form.addTextItem()
    .setTitle('[타입3] 방 크기');

  form.addTextItem()
    .setTitle('[타입3] 침대 타입');

  form.addCheckboxItem()
    .setTitle('[타입3] 편의시설')
    .setChoiceValues([
      'WiFi', '에어컨', 'TV', '냉장고', '전자레인지',
      '세탁기', '건조기', '풀 키친 (가스/인덕션+싱크대)',
      '간이 주방 (전자레인지+전기포트)', '개인 욕실',
      '헤어드라이어', '다리미', '책상', '옷장/수납장',
      '발코니', '시티뷰'
    ]);

  form.addParagraphTextItem()
    .setTitle('[타입3] 방 설명 (한국어)');

  // ──────────────────────────────
  // 섹션 5: 사진
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('5. 사진')
    .setHelpText(
      '사진이 예약 전환율에 가장 큰 영향을 줍니다.\n' +
      '밝은 자연광 아래에서, 방을 정리한 후, 가로(횡) 방향으로 촬영해주세요.\n\n' +
      '사진은 아래 방법 중 편하신 걸로 보내주세요:\n' +
      '1) Google Drive 폴더에 업로드 후 공유 링크\n' +
      '2) 네이버 MYBOX / 카카오톡 전송\n' +
      '3) 이메일 첨부'
    );

  form.addParagraphTextItem()
    .setTitle('사진 전달 방법')
    .setHelpText(
      '아래 내용을 참고하여 사진을 준비해주세요:\n\n' +
      '- 건물 외관: 1~2장\n' +
      '- [타입1] 객실 사진: 4~6장 (침실, 욕실, 주방, 전경)\n' +
      '- [타입2] 객실 사진: 4~6장 (해당 시)\n' +
      '- [타입3] 객실 사진: 4~6장 (해당 시)\n' +
      '- 기타: 공용시설, 주변환경 등\n\n' +
      'Google Drive 공유 링크 또는 전달 방법을 적어주세요.'
    );

  // ──────────────────────────────
  // 섹션 6: 위치 / 주변 정보
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('6. 위치 / 주변 정보')
    .setHelpText('외국인 게스트를 위한 교통 및 주변 정보입니다.');

  form.addTextItem()
    .setTitle('가장 가까운 지하철역')
    .setHelpText('역명 + 호선 + 도보 소요시간. 예: 강남역 2호선 도보 5분')
    .setRequired(true);

  form.addTextItem()
    .setTitle('공항버스 / 공항 접근성')
    .setHelpText('가까운 공항버스 정류장 또는 공항까지 이동 방법');

  form.addParagraphTextItem()
    .setTitle('주변 편의시설')
    .setHelpText('편의점, 마트, 병원, 약국, 세탁소 등. 도보 거리 포함');

  form.addParagraphTextItem()
    .setTitle('주변 추천 장소')
    .setHelpText('맛집, 카페, 관광지 등 외국인에게 추천할 곳');

  // ──────────────────────────────
  // 섹션 7: 결제 / 예약 정책
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('7. 결제 / 예약 정책');

  form.addMultipleChoiceItem()
    .setTitle('결제 통화')
    .setChoiceValues(['USD (달러)', 'KRW (원화)', '둘 다 표시'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('온라인 보증금 비율')
    .setHelpText('예약 시 온라인으로 선결제할 금액 비율')
    .setChoiceValues(['20%', '30%', '50%', '100% (전액 선결제)', '기타 (아래에 입력)'])
    .setRequired(true);

  form.addTextItem()
    .setTitle('보증금 비율 - 기타')
    .setHelpText('위에서 "기타"를 선택한 경우 입력');

  form.addTextItem()
    .setTitle('최소 숙박 기간')
    .setHelpText('예: 1개월 (28일), 2주')
    .setRequired(true);

  form.addTextItem()
    .setTitle('최대 숙박 기간')
    .setHelpText('예: 6개월, 제한 없음');

  form.addParagraphTextItem()
    .setTitle('취소/환불 정책')
    .setHelpText('예: 체크인 7일 전 100% 환불 / 3일 전 50% / 이후 환불 불가')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('추가 요금')
    .setHelpText('인원 추가 비용, 청소비, 공과금 정책 등. 예: 1인 추가 월 10만원, 공과금 포함');

  form.addCheckboxItem()
    .setTitle('잔금 결제 방법 (체크인 시)')
    .setHelpText('현장에서 받으실 수 있는 결제 방법')
    .setChoiceValues(['현금', '계좌이체', '카드'])
    .setRequired(true);

  // ──────────────────────────────
  // 섹션 8: 도메인 / 기타
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('8. 도메인 / 기타');

  form.addTextItem()
    .setTitle('원하시는 도메인')
    .setHelpText('예: seoulstay.com, gangnamresidence.kr / 없으면 "추천 부탁"');

  form.addTextItem()
    .setTitle('관리자 로그인용 이메일')
    .setHelpText('어드민 대시보드 접속에 사용됩니다')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('새 예약 알림 방법')
    .setChoiceValues(['이메일', '카카오톡', 'SMS', '알림 불필요'])
    .setRequired(true);

  // ──────────────────────────────
  // 섹션 9: 하우스 룰
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('9. 입주 안내 / 하우스 룰 (선택)')
    .setHelpText('게스트에게 안내할 내용이 있으면 작성해주세요.');

  form.addCheckboxItem()
    .setTitle('하우스 룰')
    .setChoiceValues([
      '금연',
      '반려동물 불가',
      '밤 10시 이후 소음 자제',
      '주차 가능',
      '주차 불가'
    ]);

  form.addParagraphTextItem()
    .setTitle('기타 안내사항')
    .setHelpText('WiFi 정보, 쓰레기 분리수거, 택배 수령, 비상 연락처 등');

  // ──────────────────────────────
  // 섹션 10: 디자인 선호도
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('10. 홈페이지 디자인 분위기 (선택)')
    .setHelpText(
      '원하시는 홈페이지 분위기를 알려주시면 맞춰서 디자인합니다.\n' +
      '잘 모르시겠으면 비워두셔도 괜찮습니다.'
    );

  form.addMultipleChoiceItem()
    .setTitle('전체적인 분위기')
    .setHelpText('가장 가까운 느낌을 하나 선택해주세요.')
    .setChoiceValues([
      '깔끔하고 모던한 (미니멀, 화이트 톤)',
      '따뜻하고 아늑한 (우드톤, 베이지)',
      '고급스럽고 세련된 (다크톤, 호텔 느낌)',
      '밝고 활기찬 (컬러풀, 젊은 느낌)',
      '잘 모르겠음 / 알아서 해주세요'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('주 타겟 고객층')
    .setHelpText('어떤 고객을 주로 생각하고 계신가요?')
    .setChoiceValues([
      '관광 / 여행객',
      '비즈니스 출장',
      '어학연수 / 유학생',
      '디지털 노마드 / 원격근무자',
      '다양한 고객 모두'
    ]);

  form.addParagraphTextItem()
    .setTitle('참고할 웹사이트 (레퍼런스)')
    .setHelpText(
      '"이런 느낌이 좋다"는 웹사이트가 있으면 URL을 적어주세요.\n' +
      '숙소 사이트가 아니어도 괜찮습니다. 분위기만 비슷하면 됩니다.\n\n' +
      '예시:\n' +
      '- Airbnb (airbnb.com) - 사진 중심, 직관적 예약\n' +
      '- Hmlet (hmlet.com) - 미니멀, 풀스크린 사진\n' +
      '- STAY256 (stay256.com) - 한국 서비스드 레지던스\n' +
      '- 호텔/펜션 사이트 중 마음에 드는 곳'
    );

  form.addParagraphTextItem()
    .setTitle('기타 디자인 요청사항')
    .setHelpText(
      '특별히 원하시는 것이 있으면 자유롭게 적어주세요.\n' +
      '예: "사진을 크게 보여줬으면 좋겠다", "지도가 잘 보이면 좋겠다",\n' +
      '"너무 화려하지 않았으면 좋겠다" 등'
    );

  // ──────────────────────────────
  // 마무리
  // ──────────────────────────────
  form.addSectionHeaderItem()
    .setTitle('감사합니다!')
    .setHelpText(
      '보내주신 정보를 바탕으로 홈페이지를 완성하겠습니다.\n' +
      '추가 사항이 있으시면 언제든 연락주세요.'
    );

  // 결과 출력
  const editUrl = form.getEditUrl();
  const publishedUrl = form.getPublishedUrl();

  Logger.log('=== 폼 생성 완료 ===');
  Logger.log('편집 URL: ' + editUrl);
  Logger.log('공유 URL (클라이언트에게 보낼 링크): ' + publishedUrl);

  return { editUrl, publishedUrl };
}
