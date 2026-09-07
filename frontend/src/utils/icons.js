import {
  Waves, Barbell, Plant, ShieldCheck, Car, UsersThree, Bell, FilmSlate,
  ForkKnife, Lightning, Sun, Drop, Television, BookOpen, Snowflake, DoorOpen,
  Buildings, Anchor, Airplane, ShoppingBag, Briefcase, Bank, Sparkle,
} from '@phosphor-icons/react';

const AMENITY_RULES = [
  [/pool|jacuzzi|spa/i, Waves],
  [/gym|fitness/i, Barbell],
  [/garden|lawn|landscap/i, Plant],
  [/security|lock/i, ShieldCheck],
  [/parking|car/i, Car],
  [/servant|staff/i, UsersThree],
  [/concierge/i, Bell],
  [/theater|theatre/i, FilmSlate],
  [/kitchen/i, ForkKnife],
  [/smart|automation/i, Lightning],
  [/solar/i, Sun],
  [/water/i, Drop],
  [/tv|television/i, Television],
  [/library|study/i, BookOpen],
  [/air condition|climate/i, Snowflake],
  [/balcony|entrance|door/i, DoorOpen],
  [/lift|elevator/i, Buildings],
];

const LOCATION_RULES = [
  [/airport/i, Airplane],
  [/shop|mall/i, ShoppingBag],
  [/tech|business|cyber/i, Briefcase],
  [/beach|harbor|harbour/i, Anchor],
  [/monument|landmark|hotel|temple|religious|spiritual/i, Bank],
];

export function amenityIcon(label) {
  const match = AMENITY_RULES.find(([pattern]) => pattern.test(label));
  return match ? match[1] : Sparkle;
}

export function locationIcon(label) {
  const match = LOCATION_RULES.find(([pattern]) => pattern.test(label));
  return match ? match[1] : Buildings;
}

// Sample data ships nearbyLocations `type` as "emoji + label" (legacy).
// Strip any leading emoji glyph so we can render a proper icon instead.
export function stripEmoji(text) {
  return (text || '').replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/gu, '').trim();
}
