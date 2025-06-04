export default function BasicImage() {
  return (
    <div className="rounded overflow-hidden border-4 border-primary/20 shadow-md">
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 w-full h-[200px] flex items-center justify-center">
        <img
          src="/student.png"
          alt="Student Photo"
          className="h-[200px] w-auto max-w-full object-contain"
        />
      </div>
    </div>
  );
}