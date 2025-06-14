import { LoadingIcon } from '#/shared/icons'
import {
  HiddenProcessingLabel,
  LoaderContainer,
  SpinningLoader,
} from './Loader.styled'

const Loader = () => {
  return (
    <LoaderContainer>
      <SpinningLoader>
        <LoadingIcon />
      </SpinningLoader>
      <HiddenProcessingLabel>Processing...</HiddenProcessingLabel>
    </LoaderContainer>
  )
}

export default Loader
