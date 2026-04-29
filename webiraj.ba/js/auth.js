async function login() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await db.auth.signInWithPassword({ email, password })

  if (error) {
    document.getElementById('poruka').innerText = 'Greška: ' + error.message
  } else {
    // Clear any previous store from localStorage
    localStorage.removeItem('aktivna_prodavnica')

    // Load the correct store for this account
    const { data: prodavnice } = await db
      .from('stores')
      .select('id')
      .eq('user_id', data.user.id)
      .order('created_at', { ascending: true })
      .limit(1)

    if (prodavnice && prodavnice.length > 0) {
      localStorage.setItem('aktivna_prodavnica', prodavnice[0].id)
    }

    window.location.href = 'dashboard.html'
  }
}


async function signup() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await db.auth.signUp({ email, password })

  if (error) {
    document.getElementById('poruka').innerText = 'Greška: ' + error.message
  } else {
    document.getElementById('poruka').innerText = 'Provjeri email da potvrdiš nalog!'
  }
}