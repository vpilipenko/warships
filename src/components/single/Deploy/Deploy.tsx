import React from 'react'

import { UI } from '../../../core/types/ui'
import { SQUADRON } from '../../../core/types/squadron'

import Field from '../../common/Field'
import Button from '../../common/Button'
import Battlefield from '../../common/Battlefield'


type DEPLOY = {
  ui?: UI,
  squadron?: SQUADRON,
}

const Deploy = (props: DEPLOY) => {
  const {
    ui,
    squadron,
  } = props

  const {
    ids,
    data,
  } = squadron

  return (
    <div>
      <Field position={ui.title.position} size={ui.title.size}>
        Deploy your squadron
      </Field>
      <Field position={ui.playerField.position} size={ui.playerField.size} outline xAxis yAxis>
        <Battlefield
          data-name='player_battlefield'
          data-width={ui.playerField.size[0]}
          data-height={ui.playerField.size[1]}
        />
      </Field>
      <Field position={ui.dockField.position} size={ui.dockField.size} outline dashed>
        {
          ids && ids.length ? 
          <div>
            {ids.map((id) => {
              const ship = data[id]
              return (
                <Field position={ship.coords[0]} size={[1, ship.coords.length]} outline key={id} />
              )
            })}
          </div> :
          null
        }
      </Field>
      <Field position={ui.btnRandomPlacement.position} size={ui.btnRandomPlacement.size}>
        <Button>Random arrangement</Button>
      </Field>
      <Field position={ui.btnClearPlacement.position} size={ui.btnClearPlacement.size}>
        <Button>Custom from scratch</Button>
      </Field>
      <Field position={ui.messageBar.position} size={ui.messageBar.size} outline>
      </Field>
    </div>
  )
}

export default Deploy