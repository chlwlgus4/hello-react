import React, {useEffect, useState, useReducer} from "react";
import useInputs from "./useInputs";
// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickname, setNickName] = useState('');
//
//     // 마운트, 업데이트 시
//     // useEffect(() => {
//     //     console.log('렌더링이 완료되었습니다.');
//     //     console.log({
//     //         name,
//     //         nickname
//     //     });
//     // });
//
//     // 마운트 시
//     // useEffect(() => {
//     //     console.log('마운트될 때만 실행됩니다.');
//     // }, []);
//     // const onChangeName = e => {
//     //     setName(e.target.value);
//     // };
//
//     // 특정 값이 업데이트될 때
//     // useEffect(() => {
//     //     console.log(name);
//     // }, [name]);
//     // const onChangeName = e => {
//     //     setName(e.target.value);
//     // };
//
//     useEffect(() => {
//         console.log('effect');
//         console.log(name);
//         return () => {
//             console.log('cleanup');
//             console.log(name);
//         }
//     });
//     const onChangeName = e => {
//         setName(e.target.value);
//     };
//
//     const onChangeNickName = e => {
//         setNickName(e.target.value);
//     };
//
//     return (
//       <div>
//           <div>
//               <input value={name} onChange={onChangeName} />
//               <input value={nickname} onChange={onChangeNickName} />
//           </div>
//           <div>
//               <div>
//                   <b>이름:</b> {name}
//               </div>
//               <div>
//                   <b>닉네임:</b> {nickname}
//               </div>
//           </div>
//       </div>
//     );
// };

// useReducer사용
// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name]: action.value
//     };
// }
//
// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         name    : '',
//         nickname: ''
//     });
//
//     const {name, nickname} = state;
//     const onChange = e => {
//         dispatch(e.target);
//     };
//
//     return (
//         <div>
//             <div>
//                 <input name={'name'} value={name} onChange={onChange}/>
//                 <input name={'nickname'} value={nickname} onChange={onChange}/>
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }

const Info = () => {
    const [state, onChange] = useInputs({
        name    : '',
        nickname: ''
    });

    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name={'name'} value={name} onChange={onChange}/>
                <input name={'nickname'} value={nickname} onChange={onChange}/>
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
    )
}

export default Info;