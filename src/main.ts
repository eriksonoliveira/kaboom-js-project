import { kaboomContext } from "./kaboomCtx";

const SCENE_NAME = "level-1";

async function gameSetup() {
  kaboomContext.loadSprite("assets", "./kirby-like.png", {
    sliceX: 9,
    sliceY: 10,
    anims: {
      kirbIdle: 0,
      kirbInhaling: 1,
      kirbFull: 2,
      kirbInhaleEffect: { from: 3, to: 8, speed: 15, loop: true },
      shootingStar: 9,
      flame: { from: 36, to: 37, speed: 4, loop: true },
      guyIdle: 18,
      guyWalk: { from: 18, to: 19, speed: 4, loop: true },
      bird: { from: 27, to: 28, speed: 4, loop: true },
    },
  });

  kaboomContext.loadSprite(SCENE_NAME, "./level-1.png");

  kaboomContext.scene(SCENE_NAME, () => {
    kaboomContext.setGravity(2100);

    // Define properties of the background
    kaboomContext.add([
      // Create background as rect and use the full width and height
      kaboomContext.rect(kaboomContext.width(), kaboomContext.height()),
      kaboomContext.color(kaboomContext.Color.fromHex("#f7d7db")),
      kaboomContext.fixed(),
    ]);
  });

  kaboomContext.go(SCENE_NAME);
}

gameSetup();
