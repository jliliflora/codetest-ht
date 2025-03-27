import { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

interface ContentListProps {
  title: string;
  categoryKey: string;
}

const ListWrapper = styled.div`
  height: 300px;
  overflow-y: auto;
  padding: 3px 16px 16px 16px;
  /* background-color: #a38686; */

  /* 스크롤바 숨기기 (크로스 브라우징) */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ListTitle = styled.h1`
  font-size: 17px;
  /* background-color: #398098; */
  padding: 16px 16px 10px 16px;
`;

const Item = styled.div`
  padding: 7px;
  margin-bottom: 8px;
  background: #f1f1f1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemCnt = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  background-color: #c1c1c1;
`;

function ContentList({ title, categoryKey }: ContentListProps) {
  const [items, setItems] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);

  // 탭 메뉴 바뀔 때 리스트 초기화
  useEffect(() => {
    // 초기 데이터 만들기
    const initialItems = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`); // 모든 탭에서 동일한 배열 사용하지 않도록 useEffect안에서 생성시키기
    setItems(initialItems);
    setHasMore(true);

    // 스크롤 위치 초기화
    const scrollBox = document.getElementById("scrollBox");
    if (scrollBox) {
      scrollBox.scrollTop = 0;
    }
  }, [categoryKey]);

  // 스크롤 끝 도달 시 실행할 함수
  const fetchMoreData = () => {
    setTimeout(() => {
      if (items.length >= 50) {
        setHasMore(false);
        return;
      }
      // 새로 데이터 10개 만들기
      const moreItems = Array.from(
        { length: 10 },
        (_, i) => `Item ${items.length + i + 1}`
      );
      setItems((prev) => [...prev, ...moreItems]);
    }, 1000); // 1초 후에 새로운 데이터 10개 추가
  };

  return (
    <>
      <ListTitle>{title}</ListTitle>
      <ListWrapper id="scrollBox">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <h4
              style={{
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading...
            </h4>
          }
          scrollableTarget="scrollBox"
        >
          {items.map((item, i) => (
            <Item key={i}>
              <ItemCnt></ItemCnt>
              {item}
            </Item>
          ))}
        </InfiniteScroll>
      </ListWrapper>
    </>
  );
}

export default ContentList;
