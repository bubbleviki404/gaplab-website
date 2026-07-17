import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'

/**
 * Card entrance + hover lift (no idle float — tool, not showcase).
 * Respects prefers-reduced-motion.
 */
export function useCardMotion(cardRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const mm = gsap.matchMedia()

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
        motionOk: '(prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const { reduceMotion } = context.conditions as {
          reduceMotion: boolean
          motionOk: boolean
        }

        gsap.set(el, {
          transformPerspective: 900,
          transformOrigin: '50% 50%',
          boxShadow:
            '0 18px 40px rgba(20, 18, 40, 0.14), 0 4px 12px rgba(20, 18, 40, 0.08)',
        })

        if (reduceMotion) {
          gsap.set(el, { y: 0, scale: 1, autoAlpha: 1, rotationX: 0 })
          return
        }

        gsap.fromTo(
          el,
          { y: 20, autoAlpha: 0, scale: 0.97 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.55,
            ease: 'power2.out',
          },
        )

        const onEnter = () => {
          gsap.to(el, {
            y: -10,
            scale: 1.02,
            duration: 0.35,
            ease: 'power2.out',
            boxShadow:
              '0 28px 56px rgba(20, 18, 40, 0.2), 0 8px 18px rgba(20, 18, 40, 0.1)',
            overwrite: 'auto',
          })
        }

        const onLeave = () => {
          gsap.to(el, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
            boxShadow:
              '0 18px 40px rgba(20, 18, 40, 0.14), 0 4px 12px rgba(20, 18, 40, 0.08)',
            overwrite: 'auto',
          })
        }

        el.addEventListener('pointerenter', onEnter)
        el.addEventListener('pointerleave', onLeave)

        return () => {
          el.removeEventListener('pointerenter', onEnter)
          el.removeEventListener('pointerleave', onLeave)
        }
      },
    )

    return () => {
      mm.revert()
    }
  }, [cardRef])
}
