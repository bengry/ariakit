import namespace from '../../enhancers/namespace'
import withId from '../../enhancers/withId'
import { withHiddenState } from '../Hidden'

const withPopoverState = namespace('popover', options => [
  withId(options.name, 'popoverId'),
  withHiddenState(options),
])

export default withPopoverState
