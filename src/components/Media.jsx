import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Media = () => {
  // Creamos un array de refs
  const imgRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Usamos useInView para cada referencia de manera individual
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inViewState = imgRefs.map(ref => useInView(ref, { once: true }));

  return (
    <div id="media">
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={inViewState[0] ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }} className="section">
        MEDIA
      </motion.h1>
      <div className="barbara_grid">
        {[
          './src/assets/img/barbara_media.jpg',
          './src/assets/img/barbara_media-2.jpg',
          './src/assets/img/barbara_media-3.jpg',
          './src/assets/img/barbara_media-4.jpg',
          './src/assets/img/barbara_media-5.jpg',
          './src/assets/img/barbara_media-6.jpg',
          './src/assets/img/barbara_media-7.mp4',
          './src/assets/img/barbara_media-8.mp4',
        ].map((src, index) => (
          src.endsWith(".mp4") ? (
            <motion.video
              key={index}
              ref={imgRefs[index]}
              initial={{ y: 100, opacity: 0 }}
              animate={inViewState[index] ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              autoPlay loop muted
              id="barbara_grid__item"
              src={src}
              style={{ width: "80%", height: "auto" }}
            />
          ) : (
            <motion.img
              key={index}
              ref={imgRefs[index]}
              initial={{ y: 100, opacity: 0 }}
              animate={inViewState[index] ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              id="barbara_grid__item"
              src={src}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Media;
