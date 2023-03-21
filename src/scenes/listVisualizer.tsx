import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Layout, Rect, Txt } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { all } from "@motion-canvas/core/lib/flow";
export default makeScene2D(function* (view) {
  const numberOfListItems = 8;
  const layoutList = Array.from({ length: numberOfListItems }, () =>
    createRef<Layout>()
  );

  for (const [key, layout] of layoutList.entries()) {
    view.add(
      <Layout layout ref={layout} gap={10} direction="column" grow={3}>
        <Rect
          width={140}
          height={100}
          fill={"#eeeeee"}
          radius={4}
          stroke={"#fff"}
          lineWidth={4}
          margin={2}
        >
          <Txt layout={false} text={key.toString()}></Txt>
        </Rect>
        <Rect grow={2} fill={"#242424"} radius={4} />
      </Layout>
    );
  }

  yield* all(
    ...layoutList.map((layout, key) =>
      layout().position.x(-500 + key * 140 + (key * 140) / numberOfListItems, 3)
    )
  );
});
