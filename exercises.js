const EXERCISES = [
  {
    "file": "Screenshot 2026-09-26 at 3.00.57 PM.png",
    "name": "Wall Sit"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.01.23 PM.png",
    "name": "Wall Single-Leg Calf Raise"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.01.53 PM.png",
    "name": "Foam Roll Single-Leg Bridge Iso Hold"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.04.11 PM.png",
    "name": "Wall Squat with Knee Extension"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.04.38 PM.png",
    "name": "Wall Sit Setup"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.06.48 PM.png",
    "name": "Reclined Nordic Curl (Re-Nordic)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.40.26 PM.png",
    "name": "Tibial Rotation"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.40.40 PM.png",
    "name": "Single-Leg Terminal Knee Extension"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.40.48 PM.png",
    "name": "Spanish Squat Hold"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.41.03 PM.png",
    "name": "Banded Squat"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.41.13 PM.png",
    "name": "Bear Hold Terminal Knee Extension"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.41.18 PM.png",
    "name": "Reverse Nordics"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.41.27 PM.png",
    "name": "Hip Flexion Kick-Outs"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.44.21 PM.png",
    "name": "Banded Knee Extension (Kneeling)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.44.35 PM.png",
    "name": "Supine Banded Leg Curl"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.44.50 PM.png",
    "name": "Standing Hip Adduction Balance"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.45.00 PM.png",
    "name": "Hip Flexor Isometric Hold"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.45.42 PM.png",
    "name": "Box Step-Up"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.46.20 PM.png",
    "name": "Three Step Drill"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.46.28 PM.png",
    "name": "Acceleration Sprint Drill"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.48.24 PM.png",
    "name": "Basketball Crossover Dribble Drill"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.48.30 PM.png",
    "name": "Low Dribble Defensive Slide"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.48.49 PM.png",
    "name": "Standing Hip Flexor Foam Roll"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.14 PM.png",
    "name": "Banded Sissy Planks"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.18 PM.png",
    "name": "Hand-Resisted Spanish Squat"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.21 PM.png",
    "name": "Banded Hamstring Curl (Lying)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.24 PM.png",
    "name": "45° Banded Hip Flexor Isometric"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.27 PM.png",
    "name": "Straight Leg Forward Banded Hip Flexor Isometric"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.30 PM.png",
    "name": "90° Banded Hip Flexor Kick-Outs"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.37 PM.png",
    "name": "45° Banded Hip Flexor Isometric (Other Side)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.49.42 PM.png",
    "name": "Lateral Banded Lunge"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.51.32 PM.png",
    "name": "Standing Hip Flexor March (Balance)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.55.25 PM.png",
    "name": "Box Hops"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.55.38 PM.png",
    "name": "Single-Leg Box Hops"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.55.48 PM.png",
    "name": "Lateral Box Hops"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.56.34 PM.png",
    "name": "Weighted Wall Sit Hip Flexor March"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.57.25 PM.png",
    "name": "Short Foot Doming Drill (Step 1)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.57.35 PM.png",
    "name": "Single-Leg Toe Raise (Yoga Block)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.57.42 PM.png",
    "name": "Short Foot Doming Drill (Step 1 Repeat)"
  },
  {
    "file": "Screenshot 2026-09-26 at 3.57.46 PM.png",
    "name": "Foot Doming Progression (Step 2)"
  },
  {
    "file": "IMG_5255.PNG",
    "name": "Bulgarian Split Squat (Bench)"
  },
  {
    "file": "IMG_5257.PNG",
    "name": "Single-Leg Wall Sit (Partner Assisted)"
  },
  {
    "file": "IMG_5258.PNG",
    "name": "Kneeling Lunge Punch Drill"
  },
  {
    "file": "IMG_5259.PNG",
    "name": "Box Step-Up with Reach"
  },
  {
    "file": "IMG_5261.PNG",
    "name": "Side-to-Side Single-Leg Plate Hops"
  }
];
