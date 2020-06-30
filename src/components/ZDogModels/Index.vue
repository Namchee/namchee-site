<script>
import { onMounted } from '@vue/composition-api';
import Zdog from 'zdog';

export default {
  setup() {
    onMounted(() => {
      const illo = new Zdog.Illustration({
        element: '.illo',
        zoom: 12,
        dragRotate: true,
        rotate: { y: Zdog.TAU / 18 },
      });

      const console = new Zdog.Group({
        addTo: illo,
      });

      // background
      new Zdog.RoundedRect({
        addTo: console,
        width: 24,
        height: 18,
        cornerRadius: 1,
        color: '#313131',
        stroke: 2,
        fill: true,
      });

      // top bar group
      const topBar = new Zdog.Group({
        addTo: console,
        translate: { x: -11, y: -8, z: 1 },
      });

      const dot = new Zdog.Ellipse({
        addTo: topBar,
        diameter: 0.5,
        color: '#F15B53',
        fill: true,
      });

      dot.copy({
        color: '#F8B82D',
        translate: { x: 2 },
      });

      dot.copy({
        color: '#26C73E',
        translate: { x: 4 },
      });

      const closeLine = new Zdog.Shape({
        addTo: topBar,
        path: [
          { x: 0, y: 0 },
          { x: 1, y: 1 },
        ],
        translate: { x: 21.5, y: -0.5 },
        stroke: 0.5,
        color: '#363636',
      });

      closeLine.copy({
        translate: { x: 22.5, y: -0.5 },
        rotate: { z: Zdog.TAU / 4 },
      });

      // console body
      const body = new Zdog.Group({
        addTo: console,
        translate: { y: 1.5 },
      });

      new Zdog.RoundedRect({
        addTo: body,
        width: 23,
        height: 14,
        cornerRadius: 1,
        stroke: 1,
        translate: { z: 1 },
        color: '#212121',
        fill: true,
      });

      const consoleContents = new Zdog.Group({
        addTo: body,
        translate: { x: -11, y: -6, z: 2 },
      });

      const getRandomColor = () => {
        const codes = [
          '#fc85ae',
          '#17b978',
          '#cabbe9',
          '#28c7fa',
          '#ffa45c',
          '#f0f696',
          '#775ada',
        ];

        return codes[Math.floor(Math.random() * codes.length)];
      };

      // first line
      const codeLine = new Zdog.Shape({
        addTo: consoleContents,
        path: [
          { x: 0, y: 0 },
          { x: 5, y: 0 },
        ],
        stroke: 0.5,
        color: getRandomColor(),
      });

      const codeDot = new Zdog.Ellipse({
        addTo: consoleContents,
        color: getRandomColor(),
        diameter: 0,
        stroke: 0.5,
        translate: { x: 6 },
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 0 },
          { x: 10, y: 0 },
        ],
        translate: { x: 7 },
      });

      // second line
      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 1.5 },
          { x: 7, y: 1.5 },
        ],
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 1.5 },
          { x: 3, y: 1.5 },
        ],
        translate: { x: 8 },
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 1.5 },
          { x: 9, y: 1.5 },
        ],
        translate: { x: 12 },
      });

      // third line
      codeDot.copy({
        color: getRandomColor(),
        translate: { y: 3 },
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 3 },
          { x: 9, y: 3 },
        ],
        translate: { x: 1 },
      });

      codeDot.copy({
        color: getRandomColor(),
        translate: { x: 11, y: 3 },
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 3 },
          { x: 3, y: 3 },
        ],
        translate: { x: 12 },
      });

      // fourth line
      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 7 },
          { x: 8, y: 7 },
        ],
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 7 },
          { x: 3, y: 7 },
        ],
        translate: { x: 9 },
      });

      codeDot.copy({
        color: getRandomColor(),
        translate: { x: 13, y: 7 },
      });

      // fifth line
      codeDot.copy({
        color: getRandomColor(),
        translate: { y: 8.5 },
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 8.5 },
          { x: 10, y: 8.5 },
        ],
        translate: { x: 1 },
      });

      codeLine.copy({
        color: getRandomColor(),
        path: [
          { x: 0, y: 8.5 },
          { x: 6, y: 8.5 },
        ],
        translate: { x: 12 },
      });

      const logoGroup = new Zdog.Group({
        addTo: illo,
        translate: { x: 9, y: 8, z: 4.5 },
        rotate: { x: Zdog.TAU / 16 },
      });

      new Zdog.Rect({
        addTo: logoGroup,
        width: 12,
        height: 12,
        stroke: 2,
        fill: true,
        color: 'rgb(240,217,29)',
      });

      const jGroup = new Zdog.Group({
        addTo: logoGroup,
        translate: { x: 2.25, y: 2, z: 1 },
      });

      // letter J
      new Zdog.Shape({
        addTo: jGroup,
        path: [
          { x: -1, y: -1 },
          { x: -1, y: 2 },
        ],
        closed: false,
      });

      new Zdog.Ellipse({
        addTo: jGroup,
        diameter: 2,
        quarters: 2,
        stroke: 1,
        rotate: { z: Zdog.TAU / 4 },
        translate: { x: -2, y: 2 },
      });

      // letter S
      const sGroup = new Zdog.Group({
        addTo: logoGroup,
        translate: { x: 0, y: 1, z: 1 },
      });

      const sCurve = new Zdog.Ellipse({
        addTo: sGroup,
        diameter: 2,
        quarters: 2,
        stroke: 1,
        rotate: { z: -Zdog.TAU / 3.25 },
        translate: { x: 4, y: 1 },
      });

      sCurve.copy({
        rotate: { z: Zdog.TAU / 4.75 },
        translate: { x: 4, y: 3 },
      });

      new Zdog.Ellipse({
        addTo: sGroup,
        diameter: 2,
        quarters: 1,
        stroke: 1,
        rotate: { z: Zdog.TAU / 2 },
        translate: { x: 4, y: 1 },
      });

      new Zdog.Ellipse({
        addTo: sGroup,
        diameter: 2,
        quarters: 1,
        stroke: 1,
        rotate: { z: Zdog.TAU },
        translate: { x: 4, y: 3 },
      });

      jGroup.copy({
        translate: { z: -2 },
      });

      sGroup.copy({
        translate: { z: -2 },
      });

      function animate() {
        illo.updateRenderGraph();
        requestAnimationFrame(animate);
      }

      animate();
    });
  },
};
</script>

<template>
  <canvas class="illo" />
</template>

<style lang="postcss" scoped></style>
