namespace galactic.adventure;

using { cuid, managed } from '@sap/cds/common';

entity Departments : cuid, managed {
  name            : String(100);
  description     : String(255);
  planet          : String(50);
}

entity Positions : cuid, managed {
  title           : String(100);
  level           : Integer;
  department      : Association to Departments;
}

entity Spacefarers : cuid, managed {
  stardustCollection      : Integer default 0;
  wormholeNavigationSkill : Integer;
  originPlanet            : String(50);
  spacesuitColor          : String(50);
  fullName                : String(150);
  department              : Association to Departments;
  position                : Association to Positions;
}