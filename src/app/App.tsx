// import { Button } from "@/shared/ui";
// import LogoSvg from "@/shared/assets/icons/plus.svg?react";
import { useState } from "react";

function App() {
  const [v, setV] = useState(1);

  return (
    <main>
      <p className="accentColor">{v}</p>
      {/* <Button
        addonLeft={<LogoSvg />}
        addonRight={<LogoSvg />}
        onClick={() => setV((prev) => prev + 1)}
      >
        Click me
      </Button> */}
    </main>
  );
}

export default App;
