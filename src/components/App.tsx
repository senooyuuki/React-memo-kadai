import { useState, FC, ChangeEvent } from "react";
import styled from "styled-components";
export const App: FC = () => {
  // テキストボックスの State
  const [text, setText] = useState<string>("");
  // メモ一覧の State
  const [memos, setMemos] = useState<string[]>([]);
  // テキストボックス入力内容を State に設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const onClickAdd = () => {
    // メモ(memos)をまとめて新しい配列 newMemos にする=>メモ一覧
    const newMemos = [...memos];
    // テキストボックスからの入力をメモ一覧に追加
    newMemos.push(text);
    // メモ一覧にセット
    setMemos(newMemos);
    // テキストボックスのクリア
    setText("");
  };
  // 削除ボタンクリック時の処理
  const onClickDelete = (index: number) => {
    // 新しい配列作成
    const newMemos = [...memos];
    // メモ一覧から該当のメモを削除
    newMemos.splice(index, 1);
    // 新しいメモ設定
    setMemos(newMemos);
  };
  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <SContainer>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton onClick={() => onClickDelete(index)}>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
