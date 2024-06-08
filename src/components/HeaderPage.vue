    <template>
        <header class="header">
            <nav>
                <ul>
                    <li>
                        <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
                        <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
                        <a v-if="isLoggedIn" @click.prevent="logout">Logout</a>
                    </li>
                </ul>   
                <div>Is Logged In: {{ isLoggedIn }}</div>
        </nav>
        </header>
    </template>

    <script>

    export default {
    data() {
        return {
        errorMessage: ''
        };
    },
    computed: {
        isLoggedIn() {
        return !!localStorage.getItem('token');
        }
    },
    methods: {
        logout() {
        localStorage.removeItem('token');
        this.$router.push('/login');
        }
    }
    };
    </script>
    <style>
    .header {
    background-color: #f8f9fa;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    }

    .header nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
    }

    .header nav ul li {
    display: inline;
    }

    .header nav ul li a {
    text-decoration: none;
    color: #007bff;
    }

    .header nav ul li a:hover {
    text-decoration: underline;
    }

    .error {
    color: red;
    }
    </style>