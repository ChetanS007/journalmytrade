import math
from trade_app.models import AddTrade
from django.db.models import Sum

#need to optimize.
def calculate_single_trade(request,trade,*args,**kwargs):

    try:
        if trade['tradeside'] == str(1) : #Buy
            
            if trade['exit_price'] > trade['entry_price']:#profit
                
                entry_price = trade['entry_price'] * trade['qty']
                exit_price =  trade['exit_price'] * trade['qty']

                gross_profit_n_loss =  exit_price - entry_price

                single_trade = {'gross_profit_n_loss':gross_profit_n_loss}
                
                net_profit_and_loss = gross_profit_n_loss + trade['brokrage_tax']
                single_trade.update({'net_profit_and_loss':net_profit_and_loss})
                total_investment = trade['entry_price'] * trade['qty']
        
                return_percentage = single_trade['net_profit_and_loss']/ total_investment * 100
                
                single_trade['return_percentage'] = math.floor(return_percentage) 


                print(single_trade) 
                return single_trade
                
            else:#loss
                entry_price = trade['entry_price'] * trade['qty']
                exit_price =  trade['exit_price'] * trade['qty']

                gross_profit_n_loss =  exit_price - entry_price

                single_trade = {'gross_profit_n_loss':gross_profit_n_loss}
                net_profit_and_loss = -abs(abs(gross_profit_n_loss) - trade['brokrage_tax'])
                single_trade.update({'net_profit_and_loss':net_profit_and_loss})

                total_investment = trade['entry_price'] * trade['qty']
        
                return_percentage = single_trade['net_profit_and_loss']/ total_investment * 100

                single_trade['return_percentage'] = math.floor(-abs(abs(return_percentage)))



                print(single_trade) 
                return single_trade
                

        elif trade['tradeside'] == str(2) : #Sell
        

            if trade['entry_price'] > trade['exit_price']:#profit

                entry_price = trade['entry_price'] * trade['qty']
                exit_price =  trade['exit_price'] * trade['qty']

                gross_profit_n_loss = entry_price - exit_price 

                single_trade = {'gross_profit_n_loss':gross_profit_n_loss}

                net_profit_and_loss = gross_profit_n_loss - trade['brokrage_tax']
                single_trade.update({'net_profit_and_loss':net_profit_and_loss})

                total_investment = trade['entry_price'] * trade['qty']

                return_percentage = single_trade['net_profit_and_loss']/ total_investment * 100
                
                single_trade['return_percentage'] = math.floor(abs(return_percentage))


                print("Sell-Profit",single_trade) 
                return single_trade
            else:#loss

                entry_price = trade['entry_price'] * trade['qty']
                exit_price =  trade['exit_price'] * trade['qty']

                gross_profit_n_loss =   entry_price - exit_price

                single_trade = {'gross_profit_n_loss':gross_profit_n_loss}
                net_profit_and_loss = -abs(abs(gross_profit_n_loss) + trade['brokrage_tax'])
                single_trade.update({'net_profit_and_loss':net_profit_and_loss})

                total_investment = trade['entry_price'] * trade['qty']
        
                return_percentage = single_trade['net_profit_and_loss']/ total_investment * 100

                single_trade['return_percentage'] = math.floor(-abs(abs(return_percentage)))

                print("sell-loss",single_trade) 
                return single_trade

    except Exception as e:
          return e




def calculate_global_trade(request,*args,**kwargs):

        try:
            total_trade = AddTrade.objects.count()
        
            win = 0
            loss = 0

            global_trade=AddTrade.objects.aggregate(gross_profit_loss=Sum('gross_profit_loss'),
                                            brokrage_tax=Sum('brokrage_tax'),
                                            net_profit_loss=Sum('net_profit_loss'))

            global_trade.update({'total_trade':total_trade,'win':win,'loss':loss})
        
            return global_trade
        except Exception as e:
            return e

        




        

    