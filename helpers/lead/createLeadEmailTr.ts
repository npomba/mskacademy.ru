import { buildLeadEmailTbodyTrs } from '@/helpers/index'
// TODO: this is basically a copy paste of mitu.msk.ru & need to check it out & make sure it fits

type TypeCreateLeadEmailTrProps = {
  item: ReturnType<typeof buildLeadEmailTbodyTrs>[number]
  idx: number
}

const createLeadEmailTr = ({ item, idx }: TypeCreateLeadEmailTrProps) => {
  const output = /* html */ `
    <tr id='tr-item-${idx}' class="${idx % 2 === 0 && 'bgOnEven'} ${
    item.tdKey === 'Телефон' && 'active-row'
  } ${!(idx + 1) && 'bgBorderHighlight'}">
      <td class="counterCell">${idx + 1}</td>
      <td>${item.tdKey}</td>
      <td>${item.tdVal}</td>
    </tr>
    `
  return output
}

export default createLeadEmailTr
