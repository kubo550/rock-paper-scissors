import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Link href='#!'>Facebook</S.Link>

      <S.Info>
        Code and design by @
        <S.Link
          href='https://github.com/kubo550'
          title='Jakub Kurdziel'
          target='_blank'
        >
          kubo550
        </S.Link>{" "}
        2021®
      </S.Info>

      <S.Info>
        Icons from{" "}
        <S.Link
          href='https://www.flaticon.com/authors/nikita-golubev'
          target='_blank'
          title='Flaticon'
        >
          Flaticon
        </S.Link>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
