export const albums = (() => {
  // All albums use the same local cover file (available as moon.png)
  const cover = () => `./moon.png`;

  // royalty-free long-form mp3 samples (SoundHelix)
  const helix = (n) =>
    `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;

  // helper: if a track title already looks like a filename, map URL to local /audio/<title>
  const urlFromTitle = (title, fallback) => {
    if (typeof title === "string" && /\.mp3$/i.test(title.trim())) {
      // Replace spaces with %20 only (as requested), keep other characters as-is
      const fileName = title.trim().replace(/ /g, "%20");
      return `./audio/${fileName}`;
    }
    return fallback;
  };

  // build 10 albums, 5 tracks each by default
  const names = Array.from({ length: 10 }, (_, i) =>
    i === 0 ? "The Tale of Universe OST 1" : `The Tale of Universe OST ${i + 1}`
  );

  const byIdx = names.map((name, i) => {
    const idx = i + 1;
    const artist = "P4XT0N";
    const year = 2015 + i;

    // default tracks
    const base = 1 + (i * 3) % 12;
    let tracks = Array.from({ length: 5 }, (_, t) => {
      const tn = base + t;
      const title = `Movement ${t + 1}`;
      const fallbackUrl = helix(((tn - 1) % 16) + 1);
      return {
        id: `${idx}-${t + 1}`,
        title,
        artist,
        duration: 210 + 20 * t, // seconds
        url: urlFromTitle(title, fallbackUrl),
        explicit: false
      };
    });

    // For Album 1, explicitly map visible titles to their correct mp3 filenames
    if (idx === 1) {
      const map = [
        ["A Stand that Existed", "A Stand That Existed.mp3"],
        ["Allocation Task Force", "Allocation Task Force.mp3"],
        ["Alternates", "Alternates.mp3"],
        ["Andr", "Andr.mp3"],
        ["Anywhere in The Universe", "Anywhere in The Universe.mp3"],
        ["Average Alternate", "Average Alternate.mp3"],
        ["Casual", "Casual.mp3"],
        ["Core of The Universe and All Knowledge", "Core of The Universe and All Knowledge.mp3"],
      ];
      tracks = map.map(([display, file], tIdx) => {
        const encoded = file.replace(/ /g, "%20"); // only convert spaces to %20
        return {
          id: `${idx}-${tIdx + 1}`,
          title: display,               // what users see in the list
          artist,
          duration: 210 + 12 * tIdx,    // placeholder durations
          url: `./audio/${encoded}`,    // direct link to the mp3 file
          explicit: false
        };
      });
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
