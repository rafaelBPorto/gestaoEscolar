import coursesRepository from '@/repositories/courses-repository/index';
import coursesService from '@/services/courses-service/index';

const mockCourses = [
  {
    "id": 1,
    "name": "Português",
    "courseCode": "POR01",
    "workload": 45,
    "fieldStudy": "Linguística",
    "createdAt": new Date("2023-03-29T17:43:25.217Z")
  },
  {
    "id": 2,
    "name": "Novo curso2",
    "courseCode": "NC001",
    "workload": 80,
    "fieldStudy": "Ciência da Computação",
    "createdAt": new Date("2023-03-30T15:09:11.389Z")
  },
  {
    "id": 2,
    "name": "Novo curso2",
    "courseCode": "NC001",
    "workload": 100,
    "fieldStudy": "Ciência da Computação",
    "createdAt": new Date("2023-03-30T15:09:11.389Z")
  }
];

describe("getCourses unit test suite", () => {

  it("should return an array of courses", async () => {
    jest.spyOn(coursesRepository, 'getCourses').mockImplementationOnce(() => {
      return Promise.resolve([...mockCourses]);
    });
    const response = await coursesService.getCourses();
    expect(response).toEqual([...mockCourses]);
  });

  it("should throw a notFoundError when no courses are returned", async () => {
    jest.spyOn(coursesRepository, 'getCourses').mockImplementationOnce(() => {
      return Promise.resolve([]);
    });
    await expect(coursesService.getCourses()).rejects.toEqual({ "message": "Record not found!", "name": "NotFoundError" });
  });

  it("shold return an object of courses", async () => {

    jest.spyOn(coursesRepository, 'getFindUniqueCourseById').mockImplementationOnce(() => {
      return Promise.resolve(mockCourses[0]);
    });

    const response = await coursesService.getCourses(1);
    expect(response).toEqual(mockCourses[0]);
  });

  it("should throw a notFoundError when no courses are returned", async () => {
    jest.spyOn(coursesRepository, 'getFindUniqueCourseById').mockImplementationOnce(() => {
      return Promise.resolve(null);
    });
    await expect(coursesService.getCourses(1)).rejects.toEqual({ "message": "Record not found!", "name": "NotFoundError" });
  });
});

describe("postCourse unit test suite", () => {
  const mockCoursesToPost = { ...mockCourses[0] };
  delete mockCoursesToPost.id;
  delete mockCoursesToPost.createdAt;

  it("shold return an object of course", async () => {
    jest.spyOn(coursesRepository, "postCourse").mockImplementationOnce(() => Promise.resolve(mockCourses[0]));
    
    const response = await coursesService.postCourse(mockCoursesToPost);
    expect(response).toEqual(mockCourses[0]);
  });
});

describe("putCourse unit test suite", () =>{
  it("shold return an object of course", async ()=>{
    jest.spyOn(coursesRepository, "putCourse").mockImplementationOnce(()=> Promise.resolve(mockCourses[2]));
    
    jest.spyOn(coursesRepository, 'getFindUniqueCourseById').mockImplementationOnce(() => {
      return Promise.resolve(mockCourses[1]);
    });

    const courseToUpdate = {...mockCourses[2]};
    delete courseToUpdate.id;
    const response = await coursesService.putCourse(courseToUpdate, 2);
    expect(response).toEqual(mockCourses[2]);
  });

   it("should throw a notFoundError when no course is returned for the given id", async ()=>{
    // jest.spyOn(coursesRepository, "putCourse").mockImplementationOnce(()=> Promise.resolve(mockCourses[2]));
    
    jest.spyOn(coursesRepository, 'getFindUniqueCourseById').mockImplementationOnce(() => {
      return Promise.resolve(null);
    });

    const courseToUpdate = {...mockCourses[2]};
    delete courseToUpdate.id;
    await expect(coursesService.putCourse(courseToUpdate, 2)).rejects.toEqual({ message: "Record not found!", name: "NotFoundError" });

  });
});

