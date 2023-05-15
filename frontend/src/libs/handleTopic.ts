import { setReadyMember, guestOutAction } from '@/store/readyInfoSlice';
import { setFinish, setRoundInfo } from '@/store/roundInfoSlice';

const HandleTopic = dispatch => message => {
  var joinAudio = new Audio('/audio/hello.mp3');
  if (message.body) {
    console.log(message)
    const quote = JSON.parse(message.body);
    // 유저 참여
    if (quote.type === 'JOIN') {
      const member = {
        nickname: quote.body.nickname,
        imagePath: quote.body.imagePath,
      };
      dispatch(setReadyMember(member));
      // hello.mp3 재생
      joinAudio?.play();
    }
    // 라운드 시작
    if (quote.type === 'ROUND_START') {
      dispatch(setRoundInfo(quote.message));
    }
    // 라운드 종료
    if (quote.type === 'ROUND_FINISH') {
      dispatch(setFinish());
    }
    // 유저 이탈
    if (quote.type === 'EXIT') {
      console.log(quote.body.nickname)
      console.log('게스트 나가요;;;')
      alert(message.body);
      dispatch(guestOutAction(quote.body.nickname))
    }
    // 호스트 이탈
    if (quote.type === 'DESTROY') {
      console.log('호스트가 나가서 방이 폭파되었읍니다;;;')
      alert(message.body)
    }
    if(quote.type === 'GUEST_LIST') {
      alert(message.body);
      console.log(quote)
    }
  } else {
    alert('got empty message');
  }
};

export { HandleTopic };
