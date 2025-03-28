// ContentList : 무한스크롤 + 콘텐츠 생성
import { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

interface ContentListProps {
  title: string;
  categoryKey: string;
}

const ListWrapper = styled.div`
  padding: 3px 16px 16px 16px;
`;

const ListTitle = styled.h1`
  font-size: 17px;
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
    console.log("🚨 useEffect fired for", categoryKey);
    const initialItems = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
    setItems(initialItems);
    setHasMore(true);

    const scrollBox = document.getElementById("scrollBox");
    if (scrollBox) {
      scrollBox.scrollTop = 0;
    }
  }, [categoryKey]);

  // 스크롤 끝 도달 시 실행할 함수
  const fetchMoreData = () => {
    console.log("🔥 fetchMoreData called");
    setTimeout(() => {
      setItems((prev) => {
        if (prev.length >= 50) {
          console.log("❌ Stop loading, reached max");
          setHasMore(false);
          return prev;
        }
        const moreItems = Array.from(
          { length: 10 },
          (_, i) => `Item ${prev.length + i + 1}`
        );
        return [...prev, ...moreItems];
      });
    }, 1000);
  };

  return (
    <ListWrapper>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        scrollableTarget="scrollBox"
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
      >
        <ListTitle>{title}</ListTitle>
        {items.map((item, i) => (
          <Item key={i}>
            <ItemCnt />
            {item}
          </Item>
        ))}
      </InfiniteScroll>
    </ListWrapper>
  );
}

export default ContentList;
