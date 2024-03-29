import {
  ListItem,
  CountryName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountryList = props => {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countryDetails
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    onClickVisitButton(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>{text}</VisitedText>
      ) : (
        <VisitButton
          type="button"
          bgColor={isVisited}
          color={isVisited}
          onClick={onClickButton}
        >
          {text}
        </VisitButton>
      )}
    </ListItem>
  )
}

export default CountryList
