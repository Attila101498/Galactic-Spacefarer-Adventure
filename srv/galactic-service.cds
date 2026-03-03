using { galactic.adventure as db } from '../db/schema';

service GalacticService {
  @restrict: [
    { grant: 'READ', to: 'Viewer' },
    { grant: '*', to: 'Admin' }
  ]
  entity Spacefarers as projection on db.Spacefarers;
  
  entity Departments as projection on db.Departments;
  entity Positions as projection on db.Positions;
}