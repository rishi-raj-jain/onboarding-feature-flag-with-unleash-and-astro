export async function POST({ request }) {
  try {
    const formData = await request.formData()
    const userName = formData.get('name')
    const userPass = formData.get('password')

    // ...
    // Do user data lookup/signup to load/save user specifics
    // ...

    // Now if the user is found, take them to the dashboard

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/dashboard',
      },
    })
  } catch (e) {
    console.log(e.message || e.toString())
    return new Response('Internal Server Error', {
      status: 500,
    })
  }
}
