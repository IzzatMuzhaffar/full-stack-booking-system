import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

const BASE_URL = 'https://00eedf02-2e35-4427-971f-90cc71844922-00-2m2f638mfzuk2.sisko.replit.dev'

