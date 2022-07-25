import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import {
  Card as MuiCard,
  Divider,
  Typography
} from '@mui/material'

type PropTypes = {
  url: string,
  alt: string,
  name: string,
  shortDescription: string
}

function ProductsList ({ url, alt, name, shortDescription }: PropTypes): JSX.Element {
  const [cardClicked, setCardClicked] = useState<boolean>(false)

  return (
      <>
        <Card
          onClick={() => setCardClicked(!cardClicked)}
        >
          <div style={{ display: cardClicked ? 'initial' : 'none' }}>
            <Typography>
              {shortDescription}
            </Typography>
            <Divider />
          </div>
          <div style={{ display: !cardClicked ? 'initial' : 'none' }}>
            <Image
              src={url}
              alt={alt}
              width={400}
              height={400}
              layout='responsive'
            />
            <Divider />
            <Typography>
              {name}
            </Typography>
          </div>
        </Card>
      </>
    )
}

const Card = styled(MuiCard)`
  width: 300px;
  height: 350px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  margin: 12px;
`

export default ProductsList