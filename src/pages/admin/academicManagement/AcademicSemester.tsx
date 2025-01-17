import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemester";

const AcademicSemester = () => {
  const {} = useGetAllSemestersQuery(undefined);

  return (
    <div>
      <h1>This is Academic Semester component</h1>
    </div>
  );
};

export default AcademicSemester;
