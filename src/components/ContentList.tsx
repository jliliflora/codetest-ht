import { useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

interface ContentListProps {
  title: string;
}

const ListWrapper = styled.div`
  height: 450px;
  overflow-y: auto;
  padding: 3px 16px 16px 16px;
  /* background-color: #a38686; */
`;

const ListTitle = styled.h1`
  font-size: 17px;
  /* background-color: #398098; */
  padding: 16px 16px 10px 16px;
`;

const Item = styled.div`
  padding: 20px;
  margin-bottom: 8px;
  background: #f1f1f1;
  border-radius: 10px;
`;

function ContentList({ title }: ContentListProps) {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`)
  );
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      if (items.length >= 50) {
        setHasMore(false);
        return;
      }
      const moreItems = Array.from(
        { length: 10 },
        (_, i) => `Item ${items.length + i + 1}`
      );
      setItems((prev) => [...prev, ...moreItems]);
    }, 1000);
  };

  return (
    <>
      <ListTitle>{title}</ListTitle>
      <ListWrapper id="scrollableDiv">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </InfiniteScroll>
      </ListWrapper>
    </>
  );
}

export default ContentList;
