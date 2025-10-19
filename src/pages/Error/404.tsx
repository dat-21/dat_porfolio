import React, { useEffect, useRef } from "react";
import styles from "./ErrorPage.module.css";

 const NotFound: React.FC = () => {
  const cordRef = useRef<HTMLCanvasElement>(null);
  const visorRef = useRef<HTMLCanvasElement>(null);

  // Animation cho dây nối
  useEffect(() => {
    const cordCanvas = cordRef.current;
    if (!cordCanvas) return;

    const ctx = cordCanvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let y1 = 160,
      y2 = 100,
      y3 = 100;
    let y1Forward = true,
      y2Forward = false,
      y3Forward = true;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, cordCanvas.width, cordCanvas.height);

      ctx.beginPath();
      ctx.moveTo(130, 170);
      ctx.bezierCurveTo(250, y1, 345, y2, 400, y3);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 8;
      ctx.stroke();

      y1 += y1Forward ? 1 : -1;
      y2 += y2Forward ? 1 : -1;
      y3 += y3Forward ? 1 : -1;

      if (y1 <= 100) y1Forward = true;
      if (y1 >= 300) y1Forward = false;
      if (y2 <= 100) y2Forward = true;
      if (y2 >= 310) y2Forward = false;
      if (y3 <= 100) y3Forward = true;
      if (y3 >= 317) y3Forward = false;
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Vẽ mặt nạ của phi hành gia
  useEffect(() => {
    const visorCanvas = visorRef.current;
    if (!visorCanvas) return;

    const visorCtx = visorCanvas.getContext("2d");
    if (!visorCtx) return;

    visorCtx.beginPath();
    visorCtx.moveTo(5, 45);
    visorCtx.bezierCurveTo(15, 64, 45, 64, 55, 45);
    visorCtx.lineTo(55, 20);
    visorCtx.bezierCurveTo(55, 15, 50, 10, 45, 10);
    visorCtx.lineTo(15, 10);
    visorCtx.bezierCurveTo(15, 10, 5, 10, 5, 20);
    visorCtx.lineTo(5, 45);
    visorCtx.fillStyle = "#2f3640";
    visorCtx.strokeStyle = "#f5f6fa";
    visorCtx.fill();
    visorCtx.stroke();
  }, []);

  return (
    <div className={styles.errorPage}>
      {/* Moon */}
      <div className={styles.moon}></div>
      <div className={`${styles.moonCrater} ${styles.moonCrater1}`}></div>
      <div className={`${styles.moonCrater} ${styles.moonCrater2}`}></div>
      <div className={`${styles.moonCrater} ${styles.moonCrater3}`}></div>

      {/* Stars */}
      <div className={`${styles.star} ${styles.star1}`}></div>
      <div className={`${styles.star} ${styles.star2}`}></div>
      <div className={`${styles.star} ${styles.star3}`}></div>
      <div className={`${styles.star} ${styles.star4}`}></div>
      <div className={`${styles.star} ${styles.star5}`}></div>

      {/* Error text */}
      <div className={styles.error}>
        <div className={styles.errorTitle}>404</div>
        <div className={styles.errorSubtitle}>Hmmm...</div>
        <div className={styles.errorDescription}>
          It looks like one of the developers fell asleep
        </div>
       <button className={`${styles.errorButton} ${styles.errorButtonActive}`}>LOGIN</button>
       <button className={styles.errorButton}>CONTACT</button>

      </div>

      {/* Astronaut */}
      <div className={styles.astronaut}>
        <div className={styles.astronautBackpack}></div>
        <div className={styles.astronautBody}></div>
        <div className={styles.astronautBodyChest}></div>
        <div className={styles.astronautArmLeft1}></div>
        <div className={styles.astronautArmLeft2}></div>
        <div className={styles.astronautArmRight1}></div>
        <div className={styles.astronautArmRight2}></div>
        <div className={styles.astronautArmThumbLeft}></div>
        <div className={styles.astronautArmThumbRight}></div>
        <div className={styles.astronautLegLeft}></div>
        <div className={styles.astronautLegRight}></div>
        <div className={styles.astronautFootLeft}></div>
        <div className={styles.astronautFootRight}></div>
        <div className={styles.astronautWristLeft}></div>
        <div className={styles.astronautWristRight}></div>

        <div className={styles.astronautCord}>
          <canvas ref={cordRef} id="cord" height={500} width={500}></canvas>
        </div>

        <div className={styles.astronautHead}>
          <canvas ref={visorRef} id="visor" width={60} height={60}></canvas>
          <div className={styles.astronautHeadVisorFlare1}></div>
          <div className={styles.astronautHeadVisorFlare2}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
