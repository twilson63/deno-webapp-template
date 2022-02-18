/** @jsx h */
import { serve } from "server"
import { h, ssr } from 'nanossr'
import { router } from 'router'

import Index from './pages/index.tsx'
import NotFound from './pages/404.tsx'

serve(
  router({
    "/": () => ssr(() => <Index />),
    "*": () => ssr(() => <NotFound />)
  })
)