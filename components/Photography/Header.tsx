import React, {useState} from 'react'
import styled from 'styled-components'
import { ArrowUpward, ArrowDownward, FilterList } from "@material-ui/icons";


const TopLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled("h3")`
  font-size: 17px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const Sorting = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SortOption = styled('select')`
  border: none;
`;


function Header({sort, sortDesc}) {
  const [sortValue, setSortValue] = useState('price');

  const asc = () => {
    sort(sortValue);
  }

  const desc = () => {
    sortDesc(sortValue);
  };


  return (
    <div style={{ marginBottom: "30px" }}>
      <TopLabels>
        <H3>
          Photography /{" "}
          <span style={{ color: "#656565", fontWeight: "normal" }}>
            Premium Photos
          </span>
        </H3>
        <Sorting>
          <ArrowUpward style={{ fontSize: 16 }} onClick={asc} />
          <ArrowDownward style={{ fontSize: 16 }} onClick={desc} />
          <span style={{ color: "#9B9B9B", marginRight: "5px" }}>Sort By</span>
          <div>
            <SortOption onChange={(e) => setSortValue(e.target.value)}>
              <option value="price">Price</option>
              <option value="name">Alphabetically</option>
            </SortOption>
          </div>
        </Sorting>
        <MobileMenu>
          <FilterList fontSize="small" />
        </MobileMenu>
      </TopLabels>
    </div>
  );
}

export default Header
