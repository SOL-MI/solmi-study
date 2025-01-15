import { createLazyFileRoute } from "@tanstack/react-router";
import { Card } from "../components/test/Card";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div>
      <Card>
        <Card.Body>
          <p>카드의 본문 내용입니다.</p>
          <p>원하는 내용을 자유롭게 넣을 수 있습니다.</p>
        </Card.Body>

        <Card.Header>
          <h2>카드 제목</h2>
        </Card.Header>

        <Card.Footer>
          <button>확인</button>
        </Card.Footer>
      </Card>
    </div>
  );
}
