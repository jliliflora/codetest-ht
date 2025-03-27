import styled from "styled-components";

const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background-color: #fff;
`;

function ContentList() {
  return (
    <ListWrapper>
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{ marginBottom: "12px" }}>
          콘텐츠 {i + 1}
        </div>
      ))}
    </ListWrapper>
  );
}

export default ContentList;
