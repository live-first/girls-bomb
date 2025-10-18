import SlideUpAnimation from '@/components/animation/slideUpAnimation'
import { Heading } from '@/components/Heading'
import { Img } from '@/components/Image'
import hane_kotomi from '@/image/羽根ことみ.jpg'
import kosaka_kurumi from '@/image/神坂くるみ.jpg'
import sendo_suzuka from '@/image/千堂すずか.jpg'
import nakajo_airi from '@/image/中條あいり.jpg'
import shinonome_shiori from '@/image/東雲しおり.jpg'
import shirakawa_yumeka from '@/image/白川ゆめか.jpg'
import arisu_nanase from '@/image/有栖ななせ.jpg'

export const MemberView = () => {
  return (
    <div className='flex flex-col gap-12 pt-8 justify-center items-center pb-40 px-1 md:px-6 bg-black'>
      <Heading tag={2} label='MEMBER' />
      <div className='flex flex-col'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-6'>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full'>
              <Img src={shirakawa_yumeka.src} alt='白川ゆめか' />
              <div className='py-2 text-2xl font-bold'>白川ゆめか</div>
              <div>
                <p>生年月日：2003年3月22日</p>
                <p>出身地：埼玉県</p>
                <p>担当カラー：ブルー</p>
                <p>血液型:A型</p>
                <p>身長：161cm</p>
                <p>趣味：歌うこと</p>
                <p>特技：誕生日を当てる／ドッヂボールの逃げ</p>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full'>
              <Img src={shinonome_shiori.src} alt='東雲しおり' />
              <div className='py-2 text-2xl font-bold'>東雲しおり</div>
              <div>
                <p>生年月日：1997年10月18日</p>
                <p>出身地：群馬県</p>
                <p>担当カラー：グリーン</p>
                <p>血液型:A型</p>
                <p>身長：158.5cm</p>
                <p>趣味：読書／人の写真を撮ること</p>
                <p>特技：フランス語／英語／アルトサックス／ダンス</p>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full'>
              <Img src={sendo_suzuka.src} alt='千堂すずか' />
              <div className='py-2 text-2xl font-bold'>千堂すずか</div>
              <div>
                <p>生年月日：2002年7月15日</p>
                <p>出身地：神奈川県</p>
                <p>担当カラー：オレンジ</p>
                <p>血液型:O型</p>
                <p>身長：160cm</p>
                <p>趣味：アニメ、アイドル</p>
                <p>特技：お菓子作り</p>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full'>
              <Img src={kosaka_kurumi.src} alt='神坂くるみ' />
              <div className='py-2 text-2xl font-bold'>神坂くるみ</div>
              <div>
                <p>生年月日：2000年7月4日</p>
                <p>出身地：徳島県</p>
                <p>担当カラー：ピンク</p>
                <p>血液型:O型</p>
                <p>身長：161cm</p>
                <p>趣味：歌、焼肉屋さん巡り、旅行</p>
                <p>特技：歌</p>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full'>
              <Img src={nakajo_airi.src} alt='中條あいり' />
              <div className='py-2 text-2xl font-bold'>中條あいり</div>
              <div>
                <p>生年月日：2004年3月25日</p>
                <p>出身地：東京都</p>
                <p>担当カラー：レッド</p>
                <p>血液型:AB型</p>
                <p>身長：162cm</p>
                <p>趣味：ショッピング</p>
                <p>特技：ダンス</p>
                <p>好きな食べ物：アイス</p>
                <p>子供の頃の夢：アンパンマン</p>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full'>
              <Img src={hane_kotomi.src} alt='羽根ことみ' />
              <div className='py-2 text-2xl font-bold'>羽根ことみ</div>
              <div>
                <p>生年月日：1998年11月26日</p>
                <p>出身地：埼玉県</p>
                <p>担当カラー：イエロー</p>
                <p>血液型:O型</p>
                <p>身長：153cm</p>
                <p>趣味：絵を描く、寝ること</p>
                <p>特技：ピアノ フルート ミュージカルものまね</p>
                <p>好きな食べ物：トマト</p>
                <p>子供の頃の夢：絵描きさん</p>
              </div>
            </div>
          </SlideUpAnimation>
          <SlideUpAnimation>
            <div className='flex flex-col p-1 md:p-3 w-full'>
              <Img src={arisu_nanase.src} alt='有栖ななせ' />
              <div className='py-2 text-2xl font-bold'>有栖ななせ</div>
              <div>
                <p>生年月日：</p>
                <p>出身地：</p>
                <p>担当カラー：</p>
                <p>血液型:</p>
                <p>身長：</p>
                <p>趣味：</p>
                <p>特技：</p>
                <p>好きな食べ物：</p>
                <p>子供の頃の夢：</p>
              </div>
            </div>
          </SlideUpAnimation>
        </div>
      </div>
    </div>
  )
}
