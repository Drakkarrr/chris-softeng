export default function UserProfile({ params }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p className='text-4xl'>
        Profile page
        <span className='p-2 ml-2 text-black bg-orange-500 rounded '>
          {params.id}
        </span>
      </p>
    </div>
  );
}
