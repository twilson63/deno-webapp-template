/** @jsx h */
import { h, Helmet, tw } from 'nanossr'

export default () => (
  <div>
    <Helmet>
      <title>404 Not Found</title>
    </Helmet>
    <h1 class={tw`flex justify-center items-center`}>Not Found</h1>
  </div>
)
