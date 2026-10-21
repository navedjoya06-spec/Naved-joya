
import { useEffect } from "react";

function TitleChanger() {
  useEffect(() => {
    document.title = "Welcome to React";
  }, []);

  return (
    <div>
      <h2>Task 1: Document Title Changer</h2>
      <p>useEffect successfully working!</p>
    </div>
  );
}

export default TitleChanger;

