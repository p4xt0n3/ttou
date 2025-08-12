export const albums = (() => {
  // All albums use the same local cover file (available as moon.png)
  const cover = () => `./moon.png`;

  // royalty-free long-form mp3 samples (SoundHelix)
  const helix = (n) =>
    `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;

  // build 10 albums, 5 tracks each by default
  const names = Array.from({ length: 10 }, (_, i) =>
    i === 0 ? "The Tale of Universe 1" : `The Tale of Universe ${i + 1}`
  );

  const byIdx = names.map((name, i) => {
    const idx = i + 1;
    const artist = "P4XT0N";
    const year = 2015 + i;

    // default tracks
    const base = 1 + (i * 3) % 12;
    let tracks = Array.from({ length: 5 }, (_, t) => {
      const tn = base + t;
      return {
        id: `${idx}-${t + 1}`,
        title: `Movement ${t + 1}`,
        artist,
        duration: 210 + 20 * t, // seconds
        url: helix(((tn - 1) % 16) + 1),
        explicit: false
      };
    });

    // For Album 1, override with the provided file names as titles (we'll map to helix audio sources for now)
    if (idx === 1) {
      const titles = [
        "A Stand That Existed.mp3",
        "Allocation Task Force.mp3",
        "Alternates.mp3",
        "Andr.mp3",
        "Anywhere in The Universe.mp3",
        "Average Alternate.mp3",
        "Casual.mp3",
        "Core of The Universe and All Knowledge.mp3",
      ];
      tracks = titles.map((title, tIdx) => ({
        id: `${idx}-${tIdx + 1}`,
        title, // keep name exactly as file name
        artist,
        duration: 210 + 12 * tIdx, // simple varied placeholder durations
        url: helix(((base + tIdx - 1) % 16) + 1),
        explicit: false
      }));
    }

    return {
      id: String(idx),
      name,
      artist,
      year,
      color: "#6d8cff",
      description: "An odyssey through starlight, nebulae, and forgotten worlds.",
      coverUrl: cover(),
      tracks
    };
  });

  return byIdx;
})();