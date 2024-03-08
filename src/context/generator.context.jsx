import { createContext, useEffect, useState } from `react`;

import { BACKEND_URL } from `../utils/API_URL`;

import axios from `axios`

const GeneratorContext = createContext()