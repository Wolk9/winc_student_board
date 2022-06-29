import { schema } from 'normalizr';

export const userEntity = new schema.Entity("persons");
export const coursesEntity = new schema.Entity("courses", {
    follower: userEntity
});
export const assignmentEntity = new schema.Entity("assignments", {
    student: userEntity,
    courses: [coursesEntity]
});