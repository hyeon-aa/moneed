import { useState, useCallback, useEffect, forwardRef, ForwardedRef } from 'react';

interface SwiperProps {
  children?: React.ReactNode;
  onSwipe: (deltaX: number, deltaY: number) => void;
  swipeDirection?: 'horizontal' | 'vertical';
}

const Swiper = forwardRef<HTMLDivElement, SwiperProps>(
  (
    { swipeDirection, onSwipe, children }: SwiperProps,
    ref: ForwardedRef<HTMLDivElement | null> // ref의 타입을 ForwardedRef로 지정
  ) => {

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleTouchStart = useCallback(
      (e: TouchEvent) => {
        const target: EventTarget | null = e.target;
        if (typeof ref !== "function" && ref?.current) {
          if (target instanceof Node) {
            if (!ref?.current.contains(target)) return;
          }

          setStartX(e.touches[0].clientX);
          setStartY(e.touches[0].clientY);
        }
      },
      [ref],
    );

    const handleTouchMove = useCallback(
      (e: TouchEvent) => {
        const nowX = e.changedTouches[0].clientX;
        const nowY = e.changedTouches[0].clientY;
        const deltaX = nowX - startX;
        const deltaY = nowY - startY;

        if (swipeDirection === 'horizontal' && Math.abs(deltaX) > Math.abs(deltaY)) {
          // 수평swipe 일때, 기본 수평 움직임 제거
          e.preventDefault();
        }

        if (swipeDirection === 'vertical' && Math.abs(deltaX) < Math.abs(deltaY)) {
          // 수직swipe 일때, 기본 수직 움직임 제거
          e.preventDefault();
        }
      },
      [startX, startY, swipeDirection],
    );

    const handleTouchEnd = useCallback(
      (e: TouchEvent) => {
        const target: EventTarget | null = e.target;
        if (typeof ref !== "function" && ref?.current) {
          if (target instanceof Node) {
            if (!ref?.current.contains(target)) return;
          }
        }

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        onSwipe(deltaX, deltaY);
      },
      [startX, startY, onSwipe],
    );

    useEffect(() => {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }, [handleTouchStart, handleTouchEnd, handleTouchMove]);

    // return (<div ref={ref}>{children}</div>);

    return (
      <div ref={ref} >
        {children}
      </div>)
  }
);

export default Swiper;