import Home from "./components/Home";
import { Preloader } from "./components/Preloader";
import { CanvasSpace, Pt, Group } from "pts";

function App() {
  (function () {
    var space = new CanvasSpace("#hello");
    space.setup({
      bgcolor: "transparent",
      resize: true,
    });
    var form = space.getForm();
    var chain = new Group();
    var stretch = false;
    // space.add(() => form.point(space.pointer, 10));
    space.add({
      animate: () => {
        // shorten the line when it's not stretching
        if (chain.length > (stretch ? 100 : 10)) chain.shift();

        form.strokeOnly("rgba(134, 173, 187, 1)", 3).line(chain);
        form
          .fillOnly("rgba(107, 142, 156, 1)")
          .point(space.pointer, 10, "circle");
      },

      action: (type, px, py) => {
        // stretch the line when mouse is down
        if (type == "down") stretch = true;
        if (type == "up") stretch = false;

        // add a point to the line when mouse moves
        if (type == "move") chain.push(new Pt(px, py));
      },
    });

    // ----

    space.bindMouse().bindTouch().play();
  })();

  return (
    <>
      <main>
        <Preloader />
        <Home />
      </main>
    </>
  );
}

export default App;
