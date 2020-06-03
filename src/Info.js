import React, {useEffect, useState} from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickName] = useState('');

    // 마운트, 업데이트 시
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.');
    //     console.log({
    //         name,
    //         nickname
    //     });
    // });

    // 마운트 시
    useEffect(() => {
        console.log('마운트될 때만 실행됩니다.');
    }, []);
    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickName = e => {
        setNickName(e.target.value);
    };

    return (
      <div>
          <div>
              <input value={name} onChange={onChangeName} />
              <input value={nickname} onChange={onChangeNickName} />
          </div>
          <div>
              <div>
                  <b>이름:</b> {name}
              </div>
              <div>
                  <b>닉네임:</b> {nickname}
              </div>
          </div>
      </div>
    );
};

export default Info;